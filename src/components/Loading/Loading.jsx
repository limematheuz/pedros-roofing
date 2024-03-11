import "./Loading.css";

export default function Loading() {
  return (
    <section className="container-load">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}