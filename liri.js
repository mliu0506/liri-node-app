require("dotenv").config();
var fs = require('fs')
var request = require("request");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var keys = require('./key.js')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]
var nodeInput = process.argv[3]

function myTweets(input){
    var params = {screen_name: 'Michael37445044'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            throw error;
        } else {
        
            var writeArrary = ['######################','node liri.js my-tweets','######################'];
            for (var i = 0; i<20; i++){
                console.log('-----------------------')
                writeArrary.push('-----------------------')
                console.log(tweets[i].text)
                writeArrary.push(tweets[i].text)
                console.log(tweets[i].created_at)
                writeArrary.push(tweets[i].created_at)
                console.log('-----------------------') 
                writeArrary.push('-----------------------')
                
            }
            for(var i=0;i<writeArrary.length;i++){
                writeArrary[i] = writeArrary[i] + '\n';
            }
            writeArrary = writeArrary.join('')
            
            writeArrary = writeArrary.replace(',','');
            
            fs.appendFile("log.txt",writeArrary,function (err) {

                if (err) {
                  return console.log(err);
                }
              
            });
        }
    });   
}
function spotifyThisSong(input){
    if (input!==undefined){
        spotify.search({ type: 'track', query: input }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                var writeArrary = ['######################','node liri.js spotify-this-song ' + nodeInput,'######################']
                
                console.log('----------------------'); 
                writeArrary.push('----------------------')                
                console.log(data.tracks.items[0].artists[0].name); 
                writeArrary.push(data.tracks.items[0].artists[0].name)   
                console.log(data.tracks.items[0].name); 
                writeArrary.push(data.tracks.items[0].name)                
                console.log(data.tracks.items[0].preview_url); 
                writeArrary.push(data.tracks.items[0].preview_url)         
                console.log(data.tracks.items[0].album.name);
                writeArrary.push(data.tracks.items[0].album.name)          
                console.log('----------------------');
                writeArrary.push('----------------------')                                 
                for(var i=0;i<writeArrary.length;i++){
                    writeArrary[i] = writeArrary[i] + '\n';
                }
                writeArrary = writeArrary.join('')
                
                writeArrary = writeArrary.replace(',','');
             
                fs.appendFile("log.txt",writeArrary,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    } else{
        spotify.search({ type: 'track', query: 'The Sign by Ace of Base' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            } else{
                var writeArrary = ['######################','node liri.js spotify-this-song','######################']
                
                console.log('----------------------'); 
                writeArrary.push('----------------------')              
                console.log(data.tracks.items[0].artists[0].name); 
                writeArrary.push(data.tracks.items[0].artists[0].name)      
                console.log(data.tracks.items[0].name); 
                writeArrary.push(data.tracks.items[0].name)              
                console.log(data.tracks.items[0].preview_url); 
                writeArrary.push(data.tracks.items[0].preview_url)      
                console.log(data.tracks.items[0].album.name);
                writeArrary.push(data.tracks.items[0].album.name)      
                console.log('----------------------'); 
                writeArrary.push('----------------------')              

                for(var i=0;i<writeArrary.length;i++){
                    writeArrary[i] = writeArrary[i] + '\n';
                }
                writeArrary = writeArrary.join('')
                
                writeArrary = writeArrary.replace(',','');
              
                fs.appendFile("log.txt",writeArrary,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    }
    
}
function movieThis(input){
    if (input){
        var title = input.replace(' ','+')
        request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {

                var writeArrary = ['######################','node liri.js movie-this '+ nodeInput,'######################']
                
                console.log('----------------------')
                writeArrary.push('----------------------')                 
                console.log(JSON.parse(body).Title);
                writeArrary.push(JSON.parse(body).Title)              
                console.log(JSON.parse(body).Year);
                writeArrary.push(JSON.parse(body).Year)                 
                console.log(JSON.parse(body).imdbRating); 
                writeArrary.push(JSON.parse(body).imdbRating)         
                console.log(JSON.parse(body).Ratings[1].Value); 
                writeArrary.push(JSON.parse(body).Ratings[1].Value)         
                console.log(JSON.parse(body).Country);
                writeArrary.push(JSON.parse(body).Country)                 
                console.log(JSON.parse(body).Language);
                writeArrary.push(JSON.parse(body).Language)                 
                console.log(JSON.parse(body).Plot);
                writeArrary.push(JSON.parse(body).Plot)                 
                console.log(JSON.parse(body).Actors);
                writeArrary.push(JSON.parse(body).Actors)
                console.log('----------------------');                
                writeArrary.push('----------------------');            
                                 

                for(var i=0;i<writeArrary.length;i++){
                    writeArrary[i] = writeArrary[i] + '\n';
                }
                writeArrary = writeArrary.join('')
                
                writeArrary = writeArrary.replace(',','');
              
                fs.appendFile("log.txt",writeArrary,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    } else {
        request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {

            if (!error && response.statusCode === 200) {
             
                var writeArrary = ['######################','node liri.js movie-this', '######################']
                
                console.log('----------------------')
                writeArrary.push('----------------------')                 
                console.log(JSON.parse(body).Title);
                writeArrary.push(JSON.parse(body).Title)              
                console.log(JSON.parse(body).Year);
                writeArrary.push(JSON.parse(body).Year)                 
                console.log(JSON.parse(body).imdbRating); 
                writeArrary.push(JSON.parse(body).imdbRating)         
                console.log(JSON.parse(body).Ratings[1].Value); 
                writeArrary.push(JSON.parse(body).Ratings[1].Value)         
                console.log(JSON.parse(body).Country);
                writeArrary.push(JSON.parse(body).Country)                 
                console.log(JSON.parse(body).Language);
                writeArrary.push(JSON.parse(body).Language)                 
                console.log(JSON.parse(body).Plot);
                writeArrary.push(JSON.parse(body).Plot)                 
                console.log(JSON.parse(body).Actors);
                writeArrary.push(JSON.parse(body).Actors)
                console.log('----------------------');                
                writeArrary.push('----------------------');            
                                 

                for(var i=0;i<writeArrary.length;i++){
                    writeArrary[i] = writeArrary[i] + '\n';
                }
                writeArrary = writeArrary.join('')
                
                writeArrary = writeArrary.replace(',','');
               
                fs.appendFile("log.txt",writeArrary,function (err) {
    
                    if (err) {
                      return console.log(err);
                    }
                  
                });
            }
        });
    }
}
function doWhatItSays(input){
    var fs = require('fs'),
    path = require('path')   

    fs.readFile("random.txt", "utf8", function (error, data){

        if (error) {
          return console.log(error);
        }
        var writeArrary = ['######################\n','node liri.js do-what-it-says ' +command+'\n','######################\n']
        writeArrary = writeArrary.join('')        
        fs.appendFile("log.txt",writeArrary,function (err) {
    
            if (err) {
              return console.log(err);
            }
        });
        
        console.log(data);
      
        var dataArr = data.split(",");
      
        console.log(dataArr);

        doThisCommand = dataArr[0];
        doThisInput = dataArr[1];

        console.log(doThisCommand)
        console.log(doThisInput)

        liriCommand(doThisCommand,doThisInput);
    });
}

function liriCommand(command,nodeInput){
    if (command === 'my-tweets'){
        myTweets(nodeInput)
    } else if (command === 'spotify-this-song'){
        spotifyThisSong(nodeInput)
    } else if (command === 'movie-this'){
        movieThis(nodeInput)
    } else if (command === 'do-what-it-says'){
        doWhatItSays(nodeInput)
    } else {
        console.log('error!!!')
    }
}

liriCommand(command, nodeInput);