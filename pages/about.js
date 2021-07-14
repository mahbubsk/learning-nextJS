import Head from 'next/head';

function About() {
    return (        
        <div style={{textAlign:'center'}}>
            <Head>
                <title>About</title>
                <meta name="about" keywords="web development, programming, bla bla bla"/>
            </Head>
            <h1>This is about page.</h1>
        </div>
    )
}

export default About
