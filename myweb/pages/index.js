import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput" placeholder="name@example.com"></input>
    </div>
    <div className="mb-3">
      <label className="form-label">Example textarea</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-primary">Submit</button>
      </div>
  )
}
export default Home