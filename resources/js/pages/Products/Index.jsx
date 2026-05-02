import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ products }) {
    // Ініціалізація useForm
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        price: '',
        description: '',
    });

    // Обробник відправки форми
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products', {
            onSuccess: () => reset(), // Очищаємо форму у разі успіху
        });
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>Управління товарами</h1>

            
            <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '30px' }}>
                <h2>Додати новий товар</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Назва товару:</label><br />
                        <input 
                            type="text" 
                            value={data.name} 
                            onChange={(e) => setData('name', e.target.value)}
                            style={{ width: '100%', padding: '5px' }}
                        />
                        
                        {errors.name && <div style={{ color: 'red', fontSize: '14px' }}>{errors.name}</div>}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Ціна:</label><br />
                        <input 
                            type="number" 
                            step="0.01"
                            value={data.price} 
                            onChange={(e) => setData('price', e.target.value)}
                            style={{ width: '100%', padding: '5px' }}
                        />
                        {errors.price && <div style={{ color: 'red', fontSize: '14px' }}>{errors.price}</div>}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Опис:</label><br />
                        <textarea 
                            value={data.description} 
                            onChange={(e) => setData('description', e.target.value)}
                            style={{ width: '100%', padding: '5px' }}
                        />
                        {errors.description && <div style={{ color: 'red', fontSize: '14px' }}>{errors.description}</div>}
                    </div>

                    <button type="submit" disabled={processing} style={{ padding: '10px 15px' }}>
                        {processing ? 'Збереження...' : 'Зберегти'}
                    </button>
                </form>
            </div>

            
            <h2>Список товарів</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>ID</th>
                        <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Назва</th>
                        <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Ціна</th>
                        <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Опис</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{product.id}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{product.name}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{product.price}</td>
                                <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>{product.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ padding: '10px', textAlign: 'center' }}>Товарів ще немає.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}