import { NavLink } from "react-router-dom";

function GalleryNavigation({ galleries }) {
    // console.log(galleries)
    return (
      <nav>
        <h1>Galleries</h1>
        <NavLink to='/'></NavLink>
        <nav>
          {galleries.map((gallery) => (
            <span key={gallery.id}>
              <NavLink to={`/galleries/${gallery.id}`}></NavLink> |
            </span>
          ))}
        </nav>


      </nav>
    );
};

export default GalleryNavigation
