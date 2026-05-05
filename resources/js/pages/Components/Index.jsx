import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ components }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/components', { onSuccess: () => reset() });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <h1>Склад комплектуючих</h1>
            
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Назва деталі:</label>
                    <input 
                        type="text" 
                        value={data.name} 
                        onChange={e => setData('name', e.target.value)} 
                        style={{ width: '100%' }} 
                        placeholder="Наприклад: Вентилятор охолодження L68134-001"
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Категорія:</label>
                    <input 
                        type="text" 
                        value={data.category} 
                        onChange={e => setData('category', e.target.value)} 
                        style={{ width: '100%' }} 
                        placeholder="Наприклад: Охолодження"
                    />
                    {errors.category && <span style={{ color: 'red' }}>{errors.category}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Вартість (грн):</label>
                    <input 
                        type="number" 
                        step="0.01"
                        value={data.price} 
                        onChange={e => setData('price', e.target.value)} 
                        style={{ width: '100%' }} 
                    />
                    {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                </div>
                <button type="submit" disabled={processing}>Додати на склад</button>
            </form>

            <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Назва</th>
                        <th>Категорія</th>
                        <th>Ціна</th>
                    </tr>
                </thead>
                <tbody>
                    {components && components.length > 0 ? (
                        components.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" style={{ textAlign: 'center' }}>Склад порожній</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}