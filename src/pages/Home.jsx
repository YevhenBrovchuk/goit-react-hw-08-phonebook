import bagimage from '../img/imgPhoneBook.jpg';

export default function Home() {
  // console.log(bagimage);
  return (
    <div
      style={{
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: { bagimage },
      }}
    >
      {/* <img src={bagimage}></img> */}
      Welcome Home
    </div>
  );
}
