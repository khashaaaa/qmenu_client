import Image from 'next/image'

const Sect3 = () => (

    <section id="sect3">
        <h1>Боломжит үйлчилгээнүүд</h1>

        <div className="uses">
            <div className="left">
                <div className="item">
                    <h3>Өрөөндөө хоол захиалах</h3>
                    <Image src="/sect3/order.png" width={60} height={60} alt="Хоол захиалах" />
                </div>
                <div className="item">
                    <h3>Массаж захиалах</h3>
                    <Image src="/sect3/massage.png" width={60} height={60} alt="Массаж захиалах" />
                </div>
                <div className="item">
                    <h3>Өрөө цэвэрлүүлэх хүсэлт илгээх</h3>
                    <Image src="/sect3/request.png" width={60} height={60} alt="Өрөө цэвэрлүүлэх хүсэлт илгээх" />
                </div>
            </div>
            <div className="wrap">
                <div className="phone">
                    <Image src="/sect3/frame.png" width={260} height={530} alt="Phone" />
                </div>

                <div className="image">
                    <Image src="/sect3/hotel.jpg" width={228} height={400} alt="services" />
                </div>
            </div>
            <div className="right">
                <div className="item">
                    <h3>Хувцас угаалга захиалах</h3>
                    <Image src="/sect3/laundry.png" width={60} height={60} alt="Хувцас угаалга захиалах" />
                </div>
                <div className="item">
                    <h3>Өрөө хүлээлгэн өгөх хүсэлт илгээх</h3>
                    <Image src="/sect3/handover.png" width={60} height={60} alt="Өрөө хүлээлгэн өгөх хүсэлт илгээх" />
                </div>
                <div className="item">
                    <h3>Үйлчлүүлэгчийн санал хүсэлт авах</h3>
                    <Image src="/sect3/feedback.png" width={60} height={60} alt="Үйлчлүүлэгчийн санал хүсэлт авах" />
                </div>
            </div>
        </div>
    </section>
)

export default Sect3