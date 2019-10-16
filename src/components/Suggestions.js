import React from 'react';
import moment from 'moment';
import Highlight from 'react-highlighter';

const Suggestions = (props) => {
    const options = props.results.map(r => (
        
        <li key={r.id}>
            <small>{moment(r.time).locale('PT_BR').format("L HH[h]mm")}</small>: <Highlight search={props.query}>{r.content}</Highlight><small> <a target="_blank" rel="noopener noreferrer" href={'https://twitter.com/jairbolsonaro/status/' + r.tweet.id_str}>tweet</a></small><br/>
            ♻️ {r.tweet.retweet_count} ♥ {r.tweet.favorite_count}  
        </li>
    ));
    return <ol>{options}</ol>
};

export default Suggestions;