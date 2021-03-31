import React,{useState}from 'react';
import axios from 'axios';
import image from '../image/one.png';

const About = () => {
  const [url, setUrl] = useState(" ");
  const [shorturl, setShortUrl] = useState(" ");
  const [errorMessage, setErrorMessage] = useState(" ");
  const [shrinking, setShrinking] = useState(false);

  function shrink() {
    setShrinking(true);
    const post = async () => {
      try {
        const result = await axios.post('http://localhost:5000/link/new',
          {url});
        console.log(result.data);
        // if (result.data.result === 'success')
        if (result.data.shorturl){
          // setUrl(" ");
          // console.log('result.data', result.data);
          console.log(result.data.shorturl);
          setShortUrl(result.data.shorturl);
          
        } else {
          error("Data invalid")
        }

      } catch (e) {
        error(e);
      }
      setShrinking(false);
    };

    function error(e){
      setErrorMessage(e);
    }

    post();
  }

  function handleChange(e){
    setUrl(e.target.value);
    // setShortUrl(" ");
    console.log(shorturl);
    
  }
  
  const onSubmit = e => {
    e.preventDefault();
    
};
 

  return (
    <>
   <main>
      <article> 
<section>

<div className="content">
<p className="data">
<h6 ><strong>Short links, big results</strong></h6>
</p>
<p className="text">
<p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
</p>

<p className="button">
<button>Get Started for Free</button>
</p>
<p style={{textDecoration:"blue"}} className="quote">
<a style={{color:'blue'}} href="https://bitly.is/Home-Hero">Get a Quote</a>
</p>

</div>

<div className="Imagecontent">
              <img src={image} alt="bitly" />
                {/* //  style={{max-width: "100%", height: "auto"}}/> */}
                
            </div>
            <section className="form">
<div className="wrapper">
      <form  action="/new" method="POST" onSubmit={onSubmit}>
      <fieldset>
        <div>
         <label >
           <input id="shortened_url" type="url" name="name" placeholder="Shorten your link" value={url} onChange={handleChange} required/>
         </label>
         </div>
        
        <button id="shortened_btn"  className="btn" type="submit" onClick={shrink}>Shorten</button>
        {shorturl}
       </fieldset>
      
      </form>
      <p style={{marginLeft:"180px"}}>By clicking SHORTEN, you are agreeing to Bitly’s <a href="https://bitly.com/pages/terms-of-service">Terms of Service</a> and <a href="https://bitly.com/pages/privacy">Privacy Policy</a></p>
    </div>
    
    <div>
    <div class="scroll-for-more text-center">Scroll to learn more<img style={{marginLeft:"650px"}} loading="lazy" class="aligncenter size-full wp-image-4819" src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/chevron.png" alt="" width="50" height="50"/>
    </div>
    </div>
    <br/>
</section>
<hr/>
<section >
<div className="innercontent">
  <hr/>
<h3 style={{textAlign: "center"}}>The link shortener that has your brand’s back</h3>

</div>
<div>
<h4 style={{textAlign: "center"}}>Your brand wasn’t built to be hidden. Help it stand out with branded links that drive 34% more clicks.</h4>
</div> 
<div  classname="grid" style={{display:"flex"}} >
  <div className="row" style={{display:"flex" }} >
    <div className="col-sm">
      <p>
        <img loading="lazy" class="images" src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-1.png"alt="imageone"
        width="750"height="400"/>
      </p>
      <h5 className="header">
        <b>Inspire Trust</b>
      </h5>
      <p>With more clicks comes increased brand recognition and consumer trust in your communications—which in turn inspires even more engagement with your links. (It’s a wonderful cycle.)</p>
    </div>
    <div className="col-sm">
      <p>
        <img loading="lazy"class="images" src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png"
        alt="imagetwo" width="750" height="400"/>
      </p>
      <h5 className="header">
        <b>Boost results</b>
      </h5>
      <p>On top of better deliverability and click-through, rich link-level data gives you crucial insight into your link engagement so your team can make smarter decisions around its content and communications.</p>
    </div>
    <div className="col-sm">
      <p>
        <img loading="lazy" class="images" src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-3.png"
        alt="imagethree"width="750" height="400"/>
        <h5 className="header">
        <b>Gain control</b>
        <p>Take credit for your content and learn more about how it’s consumed by enabling auto-branding—a feature that ensures your brand remains in any link someone shortens pointing to your website.</p>
      </h5>
      </p>
    </div>
  </div>
</div>
<section>
  <div class="cell">
    <p style={{textAlign:"center",marginTop:"90px"}}>
      <a className="btn" href="https://bitly.com/pages/pricing">Get Started</a>
      <br/>
      <a style={{color:'blue'}} href="https://bitly.com/pages/features/branded-links">Learn More</a>
    </p>

  </div>
</section>
</section>
<section className="contentdivider">
  <div class="cell">
    <hr/>
  </div>
  <div className="gridcontainer">
    <h3 className="innercontent" style={{"text-align": "center"}}>The most recognized brands in the world love Bitly</h3>
  <ul id="gallery" class="gallery">
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-espn.svg" alt="one"/>
  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-disney.svg" alt="two"/>
  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-amazon.svg" alt="three"/>

  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-nike.svg" alt="four"/>

  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-buzzfeed.svg" alt="five"/>

  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-nytimes.svg" alt="six"/>

  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-gartner.svg" alt="seven"/>

  </figure>
</li>
<li style={{display:"list-item",listStyle:"none"}} className="galleryitem">
  <figure className="galleryicon">
    <img style={{width: "auto",
    height: "auto",display:"inline-block",verticalAlign:"middle"}} src="https://docrdsfx76ssb.cloudfront.net/static/1616013790/pages/wp-content/uploads/2019/03/recognizable-brands-bose.svg" alt="eight"/>

  </figure>
</li>
  </ul>
  </div>
</section>
</section>
</article>
</main>
<section style={{color:"white",backgroundColor:" #1d1f21"}} className="bottom">
  <div className="cell">
  <h3 style={{textAlign: 'center'}}>More than a link shortener</h3>
  <p style={{textAlign: 'center',marginLeft:"600px", width:"150px",height:"50px"}} className="btn" href="https://bitly.com/pages/pricing?utm_content=site-free-linkbar&utm_source=organic&utm_medium=website&utm_campaign=null&utm_cta=site-global-linkbar">Get Started For Free</p>
  </div>

</section>
<footer className="footer"></footer>
<div className="gridcontainer">
  <div className="cell medium-4 large-auto">
    <div className="widget">
      <h4 className="widgettitle">Why Bitly?</h4>
      <div className="textwidget">
        <p>
          <a style={{color:"blue"}} href="https://bitly.com/pages/why-bitly/bitly-101">Bitly 101</a>
          <br/>
          <a style={{color:"blue"}} href="https://bitly.com/pages/why-bitly/integrations-api">Integrations $API</a>
          <br/>
          <a style={{color:"blue"}} href="https://bitly.com/pages/why-bitly/enterprise-class">Enterprise Class</a>
          <br/>
          <a style={{color:"blue"}} href="https://bitly.com/pages/pricing">Pricing</a>
          <br/>
        </p>

      </div>
    </div>
  </div>
</div>
<div className="cell medium-4 large-auto">
  <div className="widget">
  <h4 className="widgettitle">Solutions</h4>
  <div className="textwidget">
    <p>
      <a style={{color:"blue"}} href="https://bitly.com/pages/solutions/social-media">Social media</a>
      <br/>
      <a style={{color:"blue"}} href="https://bitly.com/pages/solutions/digital-marketing">Digital Marketing</a>
      <br/>
      <a style={{color:"blue"}} href="https://bitly.com/pages/solutions/customer-service">Customer Service</a>
      <br/>
      <a style={{color:"blue"}} href="https://bitly.com/pages/solutions/for-developers">For Developers</a>
      <br/>
    </p>
  </div>
  </div>
</div>

</>



  )
};
  
export default About;
//node js part