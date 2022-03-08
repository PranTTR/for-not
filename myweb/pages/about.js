import Image from 'next/image'
import chaeyoung from '../public/chaeyoung.jpg'

export const getStaticProps = async () => {
    return {
        props : {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
        }
    }
}
function About({ db_host, db_user }) {
    // example for use enviroment variables
    // const db = mysql.connect(db_host, db_user, db_password)
    // const result = await db.query(sql, ...)
    return (
        <div>
            <h1>About page !!</h1>
            <p>
            db_host: {db_host}, db_user: {db_user}
            </p>
            <Image
                src={chaeyoung}
                width={443}
                height={591}
                alt="Cutie bobo!"
            />
        </div>
    )
}

export default About;