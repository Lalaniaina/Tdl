import React, { useState } from 'react';

const SimpleDynamicTable = () => {
    // Initialisation de l'état avec un tableau de données
    const [rows, setRows] = useState([
        { name: 'Alice', age: '30', email: 'alice@example.com' },
        { name: 'Bob', age: '25', email: 'bob@example.com' },
        { name: 'Charlie', age: '35', email: 'charlie@example.com' }
    ]);

    // Fonction pour mettre à jour une cellule spécifique
    const handleInputChange = (rowIndex, columnName, value) => {
        const updatedRows = rows.map((row, index) => 
            index === rowIndex ? { ...row, [columnName]: value } : row
        );
        setRows(updatedRows);
    };

    return (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Âge</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>
                            <input
                                type="text"
                                value={row.name}
                                onChange={(e) => handleInputChange(rowIndex, 'name', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.age}
                                onChange={(e) => handleInputChange(rowIndex, 'age', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="email"
                                value={row.email}
                                onChange={(e) => handleInputChange(rowIndex, 'email', e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SimpleDynamicTable;
