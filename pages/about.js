import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>Member List | About</title>
        <meta name="keywords" content="members"/>
      </Head>
      <div>
        <h1>About Us</h1>
        <p>NetLink.Inc is a dedicated IT services company powered by a team of expert engineers who specialize in Cybersecurity, 
            Web Development, Data Analysis, System Maintenance, and Blockchain solutions.
            We are committed to delivering secure, scalable, and innovative digital solutions that help businesses grow and adapt 
            in a rapidly changing tech landscape. Whether it's protecting your systems, developing powerful web platforms, analyzing 
            critical data, or building decentralized applications, our engineers bring deep technical knowledge and a problem-solving 
            mindset to every project.
        </p>
        <p>At NetLink.Inc, we believe in building long-term partnerships through reliability, transparency, and results-driven 
            service.
        </p>
      </div>
    </>
  );
}
 
export default About;