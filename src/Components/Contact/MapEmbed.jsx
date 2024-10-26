
import "./mapEmbed.css"
const MapEmbed = () => {
  return (
    <div>
      

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28838.004088277827!2d88.99275170435011!3d25.379676758206163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcbb9036f027bb%3A0xf9e75cc07742e670!2sBirampur!5e0!3m2!1sen!2sbd!4v1729933690096!5m2!1sen!2sbd"
        
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map of Birampur"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
