import useFetch  from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data,loading,error }=useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london");
 
  return (
    <div className="featured">
     { loading ? ("loading please wait"
     ):( <><div className="featuredItem">
        <img
          src="https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>berlin</h1>
          <h2>{data[0]} posts </h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} posts </h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200d/0_London-at-sunset.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>london</h1>
          <h2>{data[2]} posts</h2>
        </div>
      </div>
      </>)
}
    </div>
  );
};

export default Featured;
