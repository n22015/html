import Link from 'next/link'
import style from '/styles/page2.module.css'
  export default function page2() {
  return (
<ul className={style.pop_btn}>
    <li>
        <h2><Link href="/">Home</Link></h2>
    </li>
    <li>
        <h2><Link href="/">About</Link></h2>
    </li>
    <li>
        <h2><Link href="/">Topics</Link></h2>
    </li>
    <li>
        <h2><Link href="/">Link</Link></h2>
    </li>
</ul>
  )
}
