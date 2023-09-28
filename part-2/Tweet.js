// props:
// user who wrote the tweet
// the name of the user who wrote the tweet
// the date of the tweet
// message being tweeted

const Tweet = ({ username, name, date, msg }) => {
    return (
        <div className='tweet'>
            <span className='username'>{ username }</span>
            <span>{ name }</span>
            <span className='date'>{ date }</span>
            <h3><span className='h3'>{ msg }</span></h3>
        </div>
    )
}