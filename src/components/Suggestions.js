import React from 'react';
import moment from 'moment';

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            {r.content} <small>({moment(r.time).locale('PT_BR').format("L - H:mm")}) <a target="_blank" href={'https://twitter.com/jairbolsonaro/status/' + r.tweet.id_str}>link</a></small> <br/>
            ♻️ {r.tweet.retweet_count} ♥ {r.tweet.favorite_count}  
        </li>
    ));
    return <ol>{options}</ol>
};

export default Suggestions;