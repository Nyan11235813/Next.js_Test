import styles from '../../styles/Members.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { Members: data }
  }
}

const Members = ({ Members }) => {
  // console.log(s)

  return (
    <div>
      <h1>All Members</h1>
      {Members.map(member => (
        <Link legacyBehavior href={'/members/' + member.id} key={member.id}>
          <a className={styles.single}>
            <h3>{ member.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Members;