import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная страница</title>
      </Head>

      <main style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Скалдин Вадим Сергеевич</h1>
        <h1>Федонин Павел Александрович</h1>
        <h2>Группа: 23ВВИ2 (Вариант 5)</h2>

        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link href="/content" style={{ 
            padding: '15px', 
            background: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '18px'
          }}>
             Задание 1: Видео с YouTube
          </Link>

          <Link href="/animals" style={{ 
            padding: '15px', 
            background: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '18px'
          }}>
             Задание 2: Соцсеть для животных
          </Link>

          <Link href="/animal-form" style={{ 
            padding: '15px', 
            background: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '18px'
          }}>
             Задание 3: Анкета животного
          </Link>
        </div>
      </main>
    </div>
  );
}