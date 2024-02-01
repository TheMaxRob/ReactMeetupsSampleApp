import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtxt = useContext(FavoritesContext);

    let content;

    if (favoritesCtxt.totalFavorites === 0) {
        content = <p>You have no favorites. Start adding some!</p>
    }
    else {
            content =  <MeetupList meetups={favoritesCtxt.favorites}/>
           
    }

    return ( 
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>

    )
}

export default FavoritesPage;