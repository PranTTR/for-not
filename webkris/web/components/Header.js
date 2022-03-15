import Link from 'next/link'

const Header = () => {
    return (
    <ul>
        <span className='หน้าหลัก'>
        <Link href="/">
            <button type="button" class="btn btn-danger btn-md">หน้าหลัก</button>
        </Link>
        </span>&nbsp;

        <span className='บันทึก'>
        <Link href="/add">
            <button type="button" class="btn btn-success btn-md">บันทึกข้อมูลผู้เช่า</button>
        </Link>
        </span>&nbsp;

        <span className='ค้นหา'>
            <Link href="/find">
            <button type="button" class="btn btn-primary btn-md">ค้นหาข้อมูลผู้เช่า</button>
        </Link>
        </span>

        <style jsx>{`
      div {
          text-align: center;
      }

      .หน้าหลัก {
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }
      .บันทึก {
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }
      .ค้นหา {
        font-size: 40px;
        font-family: 'Sarabun', sans-serif;
      }
      `}</style>
    </ul>
    )
}

    export default Header