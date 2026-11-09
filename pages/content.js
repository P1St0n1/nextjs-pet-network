import Head from 'next/head';
import Link from 'next/link';
import YouTube from 'react-youtube';
import { useState } from 'react';

export default function Content() {
  // Состояние для хранения ссылки на плеер
  const [player, setPlayer] = useState(null);

  // ID видео с YouTube
  const videoId = 'Yj36liG6BkA';

  // Настройки плеера
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // 0 — не запускать автоматически
    },
  };

  // Вызывается, когда плеер готов
  const onReady = (event) => {
    setPlayer(event.target);
  };

  // Запуск видео
  const playVideo = () => {
    if (player) player.playVideo();
  };

  // Пауза
  const pauseVideo = () => {
    if (player) player.pauseVideo();
  };

  return (
    <div>
      <Head>
        <title>Видео с YouTube</title>
      </Head>

      <main style={{ padding: '40px', fontFamily: 'Arial' }}>
        <h1>Вариант 5: Видео с YouTube</h1>

        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
        />

        <div style={{ marginTop: '20px' }}>
          <button onClick={playVideo} style={{ marginRight: '10px', padding: '10px' }}>
            ▶ Воспроизвести
          </button>
          <button onClick={pauseVideo} style={{ padding: '10px' }}>
            ⏸ Пауза
          </button>
        </div>

        <p style={{ marginTop: '30px' }}>
          <Link href="/">Вернуться на главную</Link>
        </p>
      </main>
    </div>
  );
}