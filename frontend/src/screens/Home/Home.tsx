import Navbar from 'src/components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: 1002, height: 925 }}>
        <div style={{ width: 771, height: 925 }}>
          <img
            src="assets/bg_body_slice/boca-raton-exterior.jpg"
            alt=""
            style={{
              width: 771,
              height: 255,
              display: 'block',
            }}
          />
          <div
            style={{
              width: 771,
              height: 665,
              backgroundColor: 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="assets/bg_body_slice/welcome.png"
                alt=""
                style={{
                  marginTop: 22,
                  width: 234,
                  height: 33,
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                marginTop: 27,
                paddingRight: 21,
                marginLeft: 26,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <img
                src="assets/bg_body_slice/small_houses.png"
                alt=""
                style={{
                  marginRight: 14,
                  width: 159,
                  height: 142,
                }}
              />
              <p
                style={{
                  fontFamily: 'Tahoma',
                  fontSize: 14,
                  letterSpacing: '.6px',
                  lineHeight: 1.4,
                }}
              >
                Hello. In this tutorial i will show you how to create an elegant
                WordPress PSD theme. You can use this web template also for
                consulting agency templates, services websites, marketing
                website templates, business website templates, finance website
                templates. The design is very clean and can be modified very
                easy into a great template.
              </p>
            </div>
            <div style={{ marginTop: 25, marginLeft: 57, marginRight: 37 }}>
              <p
                style={{
                  fontFamily: 'Tahoma',
                  fontSize: 14,
                  letterSpacing: '.6px',
                  lineHeight: 1.4,
                }}
              >
                Hello. In this tutorial i will show you how to create an elegant
                WordPress PSD theme. You can use this web template also for
                consulting agency templates, services websites, marketing
                website templates, business website templates, finance website
                templates. The design is very clean and can be modified very
                easy into a great template..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
