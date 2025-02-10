export default function Servicesect() {
    return(
        <>
        <section className="service-sect">
            <div className="container-fluid py-5">
                <h3 className="text-center py-3">Our Services</h3>
                <div className="row pt-5">
                    <div className="col-md-4 text-center boxes px-5">
                        <img src={require('./img/recruit_without_bg.webp')} alt="" />
                            <h3 className="text-center">Recrutiment</h3>
                        <p>We specialize in identifying and attracting top talent tailored to meet your organization's specific needs, ensuring the perfect fit for your team.</p>
                    </div>
                    <div className="col-md-4 text-center boxes px-5">
                         <img src={require('./img/full_time.webp')} alt="" />
                        <h3>Full-Time Employment</h3>
                        <p>We specialize in identifying and attracting top talent tailored to meet your organization's specific needs, ensuring the perfect fit for your team.</p>
                    </div>
                    <div className="col-md-4 text-center boxes px-5">
                        <img src={require('./img/permanent.webp')} alt="" />
                        <h3>Permanent Contract</h3>
                        <p>We specialize in identifying and attracting top talent tailored to meet your organization's specific needs, ensuring the perfect fit for your team.</p>
                    </div>
                </div>
                <div className="text-center cta-btn pt-4">
                    <button className='br-none'>Read More</button>
                </div>
            </div>
        </section>
        </>
    )
}
