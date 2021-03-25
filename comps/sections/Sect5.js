import Image from 'next/image'

const Sect5 = () => (

    <section id="sect5">

        <div className="article">
            <h1>Q Restaurant Management System /QRMS/</h1>

            <p>
                Q ресторан удирдлагын систем нь сүлжээ ресторан, паб, барны үйл ажиллагаа явуулдаг бизнесүүдэд зориулсан цогц (all in one) систем юм. Тус системийг ашиглан үйлчлүүлэгчийн захиалга удирдахаас гадна бараа материалын удирдлага, ажилтнуудыг бүртгэл удирдлагыг хийх боломжтой бөгөөд менежер, захирлуудад зориулсан ахисан түвшиний тайлангийн системтэй.
            </p>
        </div>

        <div className="options">

            <ul>
                <h5>QRMS систем нь Монголын зах зээлд арилжаалагдаж буй бусад системүүдтэй адилхан функцуудтэй боловч доорх 4 үзүүлэлтээр бусад системүүдээс илүү.</h5>
                <li>Бараа материалын удирдлагын системтэй.</li>
                <li>Рестораны бүхий л үйл ажиллагааг график дүрслэлээр харуулах боломжтой тайлангийн системтэй.</li>
                <li>QR code -д суурьласан цахим меню нь захиалга авах процессыг дараагийн түвшинд аваачина.</li>
                <li>Захиалга бүрийн өртөгийн тооцоолол хийж бохир ашгийг тооцоолон харуулна.</li>
            </ul>

            <div>
                <Image src="/desktop_tablet.png" width={560} height={400} alt="devices" />
            </div>
        </div>
    </section>
)

export default Sect5