import logo from './logo.svg';
import './App.css';

let songDatabase = {
  "rock" : [
    {
      "Song" : "Sweet child o mine",
      "Artist" : "Guns n Roses",
      "imgUrl" : "images/rock/sweet-chil-o-mine.jpg",
      "spotifyLink" : "https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51?si=4e30d7bca11d4479"
    },
    {
      "Song" : "Purple Rain",
      "Artist" : "Prince",
      "imgUrl" : "images/rock/purple-rain.jpg",
      "spotifyLink" : "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz?si=b0ed18bb4cb74d6e"
    },
    {
      "Song" : "Hotel California",
      "Artist" : "Eagles",
      "imgUrl" : "images/rock/hotel-california.jpg",
      "spotifyLink" : "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv?si=eaf3c126b3034bbe"
    },
  ],
  "pop" : [
    {
      "Song" : "Billie Jean",
      "Artist" : "Michael Jackson",
      "imgUrl" : "images/pop/billie-jean.jpg",
      "spotifyLink" : "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5?si=542011994d10401f"
    },
    {
      "Song" : "Wonder",
      "Artist" : "Shawn Mendes",
      "imgUrl" : "images/pop/wonder.jpg",
      "spotifyLink" : "https://open.spotify.com/track/5KCbr5ndeby4y4ggthdiAb?si=59114a79b2094024"
    },
    {
      "Song" : "Starboy",
      "Artist" : "The Weeknd",
      "imgUrl" : "images/pop/star-boy.jpg",
      "spotifyLink" : "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB?si=9d380abe74a54a3d"
    },
  ],
  "hipHop" : [
    {
      "Song" : "Lose Yourself",
      "Artist" : "Eminem",
      "imgUrl" : "images/hip-hop/lose-yourself.jpg",
      "spotifyLink" : "https://open.spotify.com/track/3u0W3gJQNV5gegMmntzby8?si=6af86ed0267849af"
    },
    {
      "Song" : "The search",
      "Artist" : "NF",
      "imgUrl" : "images/hip-hop/the-search.jpg",
      "spotifyLink" : "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=e8f78da7214a4664"
    },
    {
      "Song" : "Ambitionz Az A Ridah",
      "Artist" : "2Pac",
      "imgUrl" : "images/hip-hop/ambitionz.jpg",
      "spotifyLink" : "https://open.spotify.com/track/5g9lS8deSIxItFBmZRC4vN?si=afe5c39a58394337"
    },
  ],
  "instrumental" : [
    {
      "Song" : "Why so serious?",
      "Artist" : "Hans Zimmer",
      "imgUrl" : "images/instrumentals/why-so-serious.jpg",
      "spotifyLink" : "https://open.spotify.com/track/1wdoaja3ueHHvzobn2jE2n?si=840ac954eda748bc"
    },
    {
      "Song" : "Daredevil",
      "Artist" : "John Paesano",
      "imgUrl" : "images/instrumentals/daredevil.jpg",
      "spotifyLink" : "https://open.spotify.com/track/4t20umh0eSuYstasrSl2HV?si=69a4ff681a144b05"
    },
    {
      "Song" : "Harry Potter",
      "Artist" : "John Williams",
      "imgUrl" : "images/instrumentals/harry-potter.jpg",
      "spotifyLink" : "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF?si=67aa47801fa34d49"
    },
  ]
};

let rock = [{
  "Song" : "Sweet child o mine",
  "Artist" : "Guns n Roses",
  "imgUrl" : "images/rock/sweet-chil-o-mine.jpg",
  "spotifyLink" : "https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51?si=4e30d7bca11d4479"
},
{
  "Song" : "Purple Rain",
  "Artist" : "Prince",
  "imgUrl" : "images/rock/purple-rain.jpg",
  "spotifyLink" : "https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz?si=b0ed18bb4cb74d6e"
},
{
  "Song" : "Hotel California",
  "Artist" : "Eagles",
  "imgUrl" : "images/rock/hotel-california.jpg",
  "spotifyLink" : "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv?si=eaf3c126b3034bbe"
},];
let pop = [{
  "Song" : "Billie Jean",
  "Artist" : "Michael Jackson",
  "imgUrl" : "images/pop/billie-jean.jpg",
  "spotifyLink" : "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5?si=542011994d10401f"
},
{
  "Song" : "Wonder",
  "Artist" : "Shawn Mendes",
  "imgUrl" : "images/pop/wonder.jpg",
  "spotifyLink" : "https://open.spotify.com/track/5KCbr5ndeby4y4ggthdiAb?si=59114a79b2094024"
},
{
  "Song" : "Starboy",
  "Artist" : "The Weeknd",
  "imgUrl" : "images/pop/star-boy.jpg",
  "spotifyLink" : "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB?si=9d380abe74a54a3d"
},
]
let hipHop = [{
  "Song" : "Lose Yourself",
  "Artist" : "Eminem",
  "imgUrl" : "images/hip-hop/lose-yourself.jpg",
  "spotifyLink" : "https://open.spotify.com/track/3u0W3gJQNV5gegMmntzby8?si=6af86ed0267849af"
},
{
  "Song" : "The search",
  "Artist" : "NF",
  "imgUrl" : "images/hip-hop/the-search.jpg",
  "spotifyLink" : "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=e8f78da7214a4664"
},
{
  "Song" : "Ambitionz Az A Ridah",
  "Artist" : "2Pac",
  "imgUrl" : "images/hip-hop/ambitionz.jpg",
  "spotifyLink" : "https://open.spotify.com/track/5g9lS8deSIxItFBmZRC4vN?si=afe5c39a58394337"
},
]
let instrumental = [{
  "Song" : "Why so serious?",
  "Artist" : "Hans Zimmer",
  "imgUrl" : "images/instrumentals/why-so-serious.jpg",
  "spotifyLink" : "https://open.spotify.com/track/1wdoaja3ueHHvzobn2jE2n?si=840ac954eda748bc"
},
{
  "Song" : "Daredevil",
  "Artist" : "John Paesano",
  "imgUrl" : "images/instrumentals/daredevil.jpg",
  "spotifyLink" : "https://open.spotify.com/track/4t20umh0eSuYstasrSl2HV?si=69a4ff681a144b05"
},
{
  "Song" : "Harry Potter",
  "Artist" : "John Williams",
  "imgUrl" : "images/instrumentals/harry-potter.jpg",
  "spotifyLink" : "https://open.spotify.com/track/1n8NKQRg8LVHy7oUhUgbFF?si=67aa47801fa34d49"
},
]




function App() {
  return (
    <div className="App">
      <h1 className="heading">Song Recommendations</h1>
      <div className="container">
        <div className="btn-container" >
          <button className="btn active">Rock</button>
          <button className="btn">Pop</button>
          <button className="btn">Hip-Hop</button>
          <button className="btn">Instrumental</button>
        </div>
        <hr className="hr"/>

        {
          rock.map((song)=>{
            return (
              <div className="list-ele-container">
                  <img
                    className="img"
                    src={song["imgUrl"]}
                    alt=""
                  />
                  <div className="desc-div">
                    <p className="p-tag-desc">Song : {song["Song"]}</p>
                    <p className="p-tag-desc">Artist : {song["Artist"]}</p>
                    <div className="spotify-section">
                      <i class="fab fa-spotify"></i>
                      <a className="spotify-link" href={song["spotifyLink"]} target="_blank">
                        Spotify
                      </a>
                    </div>
                  </div>
              </div>
            )
          })
        }
        </div>
      </div>
  );
}

export default App;
