// Called "setMyTrips on Globetrotter" 
export const userAddFavorite = user => {
    return {
        type: "USER_ADD_FAVORITE",
        user
    }
}