import React, { useState } from 'react';

const QueryBuilder = () => {
    // const [groups, setGroups] = useState([
    //     {
    //         id: '28364242',
    //         rule_name: '',
    //         description: '',
    //         combinator: 'AND',
    //         conditions: [
    //             {
    //                 id: '658757654',
    //                 field: 'ANL',
    //                 operator: '=',
    //                 textVal: 'text value',
    //             },
    //         ],
    //     },
    // ]);

    const getInitialState = () => [
        {
            conditions: [
                {
                    id: '658757654',
                    field: 'ANL',
                    operator: '=',
                    textVal: 'text value',
                },
            ],
        },
    ];
    
    const [groups, setGroups] = useState(getInitialState());

    const generateID = () => '_' + Math.random().toString(36).substr(2, 9);

    const recalculateSequences = (conditions) => {
        let sequenceCounter = 1;
        return conditions.map((condition) => {
            if (condition.conditions) {
                // Nested group, reset sequence for its conditions
                return {
                    ...condition,
                    sequence: sequenceCounter++,
                    conditions: recalculateSequences(condition.conditions),
                };
            }
            // Rule
            return {
                ...condition,
                sequence: sequenceCounter++,
            };
        });
    };

    const updateSequences = (updatedGroups) => {
        // Update sequences for the outer group
        return updatedGroups.map((group) => ({
            ...group,
            conditions: recalculateSequences(group.conditions),
        }));
    };

    const handleRuleChange = (path, field, value) => {
        const updatedGroups = [...groups];
        let currentGroup = updatedGroups;

        for (let i = 0; i < path.length - 1; i++) {
            if (!currentGroup[path[i]]) {
                return;
            }
            currentGroup = currentGroup[path[i]].conditions;
        }

        const ruleIndex = path[path.length - 1];
        if (!currentGroup[ruleIndex]) {
            return;
        }

        currentGroup[ruleIndex][field] = value;
        setGroups(updateSequences(updatedGroups));
    };

    // const handleAddGroup = (path) => {
    //     const newGroup = {
    //         id: generateID(),
    //         combinator: 'OR',
    //         conditions: [
    //             {
    //                 id: generateID(),
    //                 field: 'BIC',
    //                 operator: '=',
    //                 textVal: '',
    //             },
    //         ], // Default rule inside the new group
    //     };
    
    //     const updatedGroups = [...groups];
    //     let currentGroup = updatedGroups;
    
    //     path.forEach((index) => {
    //         currentGroup = currentGroup[index].conditions;
    //     });
    
    //     currentGroup.push(newGroup);
    //     setGroups(updateSequences(updatedGroups));
    // };

    // const handleAddRule = (path) => {
    //     const newRule = {
    //         id: generateID(),
    //         field: 'BIC',
    //         operator: '!=',
    //         textVal: '',
    //     };

    //     const updatedGroups = [...groups];
    //     let currentGroup = updatedGroups;

    //     path.forEach((index) => {
    //         currentGroup = currentGroup[index].conditions;
    //     });

    //     currentGroup.push(newRule);
    //     setGroups(updateSequences(updatedGroups));
    // };

    const handleAddRule = (path) => {
        let updatedGroups = [...groups];
    
        // If transitioning from minimal to full structure
        if (!updatedGroups[0].id) {
            updatedGroups = [
                {
                    id: generateID(),
                    rule_name: '',
                    description: '',
                    combinator: 'AND',
                    conditions: updatedGroups[0].conditions,
                },
            ];
        }
    
        let currentGroup = updatedGroups;
        path.forEach((index) => {
            currentGroup = currentGroup[index].conditions;
        });
    
        currentGroup.push({
            id: generateID(),
            field: 'BIC',
            operator: '!=',
            textVal: '',
        });
    
        setGroups(updateSequences(updatedGroups));
    };
    
    const handleAddGroup = (path) => {
        let updatedGroups = [...groups];
    
        // If transitioning from minimal to full structure
        if (!updatedGroups[0].id) {
            updatedGroups = [
                {
                    id: generateID(),
                    rule_name: '',
                    description: '',
                    combinator: 'AND',
                    conditions: updatedGroups[0].conditions,
                },
            ];
        }
    
        let currentGroup = updatedGroups;
        path.forEach((index) => {
            currentGroup = currentGroup[index].conditions;
        });
    
        currentGroup.push({
            id: generateID(),
            combinator: 'OR',
            conditions: [
                {
                    id: generateID(),
                    field: 'BIC',
                    operator: '=',
                    textVal: '',
                },
            ],
        });
    
        setGroups(updateSequences(updatedGroups));
    };
    

    const handleRemoveRule = (path, ruleIndex) => {
        const updatedGroups = [...groups];
        let currentGroup = updatedGroups;

        path.forEach((index) => {
            currentGroup = currentGroup[index].conditions;
        });

        currentGroup.splice(ruleIndex, 1);
        setGroups(updateSequences(updatedGroups));
    };

    const handleRemoveGroup = (path) => {
        const updatedGroups = [...groups];
        let currentGroup = updatedGroups;

        for (let i = 0; i < path.length - 1; i++) {
            currentGroup = currentGroup[path[i]].conditions;
        }

        currentGroup.splice(path[path.length - 1], 1);
        setGroups(updateSequences(updatedGroups));
    };

    const renderGroup = (group, path = []) => {
        return (
            <div key={group.id} className="border-gray-600 border-solid border rounded p-3 w-full">
                <div className="flex justify-between">
                    <div>
                        <select
                            value={group.combinator}
                            onChange={(e) =>
                                handleRuleChange(path, 'combinator', e.target.value)
                            }
                            name="combinator"
                            className="w-full rounded-md border-0 py-1.5 text-xs block"
                        >
                            <option value="AND">AND</option>
                            <option value="OR">OR</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={() => handleAddRule(path)}>+ Rule</button>
                        <button onClick={() => handleAddGroup(path)}>+ Group</button>
                        {path.length > 0 && (
                            <button onClick={() => handleRemoveGroup(path)}>- Group</button>
                        )}
                    </div>
                </div>
                {group.conditions.map((rule, ruleIndex) => (
                    <div key={rule.id} className="gap-2 mt-3 flex">
                        {rule.conditions ? (
                            renderGroup(rule, [...path, ruleIndex])
                        ) : (
                            <>
                                <div className="w-11/12">
                                    <div className="grid grid-cols-3 gap-2">
                                        <div>
                                            <select
                                                value={rule.field}
                                                onChange={(e) =>
                                                    handleRuleChange([...path, ruleIndex], 'field', e.target.value)
                                                }
                                                name="field"
                                                className="w-full rounded-md border-0 py-1.5 text-xs block"
                                            >
                                                <option value="BIC">BIC</option>
                                                <option value="NATID">NATID</option>
                                                <option value="ANL">ANL</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select
                                                value={rule.operator}
                                                onChange={(e) =>
                                                    handleRuleChange([...path, ruleIndex], 'operator', e.target.value)
                                                }
                                                name="operator"
                                                className="w-full rounded-md border-0 py-1.5 text-xs block"
                                            >
                                                <option value="=">=</option>
                                                <option value="!=">!=</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                value={rule.textVal}
                                                onChange={(e) =>
                                                    handleRuleChange([...path, ruleIndex], 'textVal', e.target.value)
                                                }
                                                name="textVal"
                                                type="text"
                                                className="w-full rounded-md border-0 py-1.5 text-xs block"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/12">
                                    <button
                                        onClick={() => handleRemoveRule(path, ruleIndex)}
                                    >
                                        x
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Create Rule</h1>
            {groups.map((group, groupIndex) => renderGroup(group, [groupIndex]))}
            <pre>{JSON.stringify({ rule: groups }, null, 2)}</pre>
        </div>
    );
};

export default QueryBuilder;
