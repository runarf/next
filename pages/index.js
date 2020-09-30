import Head from 'next/head';
import ReactPlayer from 'react-player/youtube';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Runars Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>My favorite yoga poses.</h1>
      </header>

      <main>
        <section>
          <h1>Playlist.</h1>
          <ReactPlayer url="https://www.youtube.com/playlist?list=PLKQXDOyUbI6NPsGylDjAZBEI5sww1NMRe" />
        </section>
        <section>
          <h1>Trikonasana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=S6gB0QHbWFE" />
        </section>

        <section>
          <h1>Bhujangasana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=fOdrW7nf9gw" />
        </section>
        <section>
          <h1>Balāsana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=2MJGg-dUKh0" />
        </section>
        <section>
          <h1>Uttāna Shishosana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=B_G9_9J-0dg" />
        </section>

        <section>
          <h1>Vīrāsana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=ncYm6eqa1NA" />
        </section>
        <section>
          <h1>Ūrdhva Mukha Śvānāsana.</h1>
          <ReactPlayer url="https://www.youtube.com/watch?v=tbh0qyLJRaI" />
        </section>
      </main>

      <footer>Powered by Mordi</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
