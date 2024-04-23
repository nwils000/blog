export function IntroductoryHeader() {
  return (
    <header>
      <div className="my-name">
        <a href="#">
          <h1>{`Nathan Wilson`}</h1>
        </a>
      </div>
      <div className="intro-statement">
        <p>
          {`This blog documents my path from a beginner in front-end web
          development to mastering full-stack development, beginning with my
          experience at the Awesome Inc. boot-camp. I invite you to witness my
          journey unfold, experiencing the growth and challenges through my
          eyes.`}
        </p>
        <p>
          {`"Live as if you were to die tomorrow. Learn as if you were to live
          forever." - Mahatma Gandhi`}
        </p>
      </div>
    </header>
  );
}
