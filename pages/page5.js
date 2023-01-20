import Link from 'next/link'
import style from '/styles/page5.module.css'
   export default function Page5() {
   return (
     <>
<Link href="/" legacyBehavior>
     <a>stylesheet</a>
</Link>
<Link href="/" legacyBehavior>
     <a>main.css</a>
</Link>
<div className="style.box">
    <h1>Notice</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
</div>
     </>
   )
}
