import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function AnimalForm() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/saveAnimal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage(' Анкета успешно сохранена!');
        setFormData({ name: '', breed: '', age: '' });
      } else {
        setMessage(' Ошибка при сохранении');
      }
    } catch (error) {
      setMessage(' Ошибка сети');
    }
  };

  return (
    <div>
      <Head>
        <title>Анкета животного</title>
      </Head>

      <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
        <h1>Лабораторная 2, Вариант 5: Заполнить анкету животного</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
          <input
            type="text"
            name="name"
            placeholder="Кличка животного"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />

          <input
            type="text"
            name="breed"
            placeholder="Порода"
            value={formData.breed}
            onChange={handleChange}
            required
            style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />

          <input
            type="number"
            name="age"
            placeholder="Возраст (лет)"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
            max="100"
            style={{ padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />

          <button
            type="submit"
            style={{
              padding: '15px',
              fontSize: '16px',
              background: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Сохранить анкету
          </button>
        </form>

        {message && (
          <p style={{ marginTop: '20px', fontSize: '18px', color: message.includes('успешно') ? 'green' : 'red' }}>
            {message}
          </p>
        )}

        <p style={{ marginTop: '30px' }}>
          <Link href="/" style={{ color: '#0070f3', fontSize: '18px' }}>
            ← Вернуться на главную
          </Link>
        </p>
      </main>
    </div>
  );
}