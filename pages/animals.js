import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const buttonStyle = {
  padding: '15px',
  borderRadius: '50%',
  background: 'red',
  opacity: 0.7,
  fontSize: '20px'
};

const headerStyle = {
  color: 'white',
  position: 'absolute',
  zIndex: 4,
  top: '30%',
  left: '40%'
};

const contentStyle = {
  color: 'white',
  textAlign: 'center',
  top: '50%',
  left: '25%',
  position: 'absolute',
  zIndex: 4
};

const bgImg = {
  position: 'fixed',
  zIndex: 3,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function sendEmail(email) {
  const body = `Здравствуйте, я нашел вашего питомца.%0A-----------%0AС уважением, ${localStorage.user}`;
  window.open(`mailto:${email}?subject=Потерянный зверь&body=${body}`);
}

function Animal(props) {
  if (!props.data) return <p>Loading</p>;
  const { header, content, img } = props.data;
  return (
    <div>
      <h1 style={headerStyle}>{header}</h1>
      <br />
      <h2 style={contentStyle}>{content}</h2>
      <img
        style={bgImg}
        alt={header}
        src={img}
      />
    </div>
  );
}

export default function Animals() {
  const [animals, setAnimals] = React.useState([]);

  React.useEffect(() => {
    fetch('/animals.json')
      .then(data => data.json())
      .then(data => setAnimals(data));
  }, []);

  React.useEffect(() => {
    let user = localStorage.getItem('user');
    if (user === null) {
      while (user === null) {
        user = prompt('Введите ваше имя пользователя');
        if (!user) {
          alert('Обязательно!');
        } else {
          localStorage.setItem('user', user);
        }
      }
    }
  }, []);

  function logout() {
    localStorage.clear();
    location.reload();
  }

  return (
    <div>
      <Head>
        <title>Petto - Социальная сеть для питомцев</title>
        <meta name="description" content="Социальная сеть для питомцев" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '40px', fontFamily: 'Arial' }}>
        <button onClick={logout} style={{ marginBottom: '20px', padding: '10px' }}>
          logout
        </button>
        <h1>Petto - Поиск потерянных животных</h1>
        
        <Link href="/animal-form" style={{ display: 'block', marginBottom: '20px', fontSize: '18px', color: '#0070f3' }}>
           Заполнить анкету животного
        </Link>

        <AwesomeSlider style={{ '--slider-height-percentage': '100%' }}>
          {animals.map((data, i) => (
            <div key={i} style={{ zIndex: 2 }} onClick={() => sendEmail(data?.email)}>
              <Animal data={data} />
            </div>
          ))}
        </AwesomeSlider>

        <p style={{ marginTop: '30px' }}>
          <Link href="/" style={{ color: '#0070f3', fontSize: '18px' }}>
            ← Вернуться на главную
          </Link>
        </p>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        Petto, (c) 2022
      </footer>
    </div>
  );
}