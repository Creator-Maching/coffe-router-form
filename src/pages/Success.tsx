import img from '../assets/images/Coffe_relax.png'
import '../App.css';

export default function Success() {
  return (
    <div>
      <h1>Registration Successful 🎉</h1>
      <p>Your account has been created.</p>
      <img src={img} className="coffe" alt="Success" />
    </div>
  );
}
