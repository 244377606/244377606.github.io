const urlMusic = "https://raw.githubusercontent.com/244377606/music/master/";
const ap = new APlayer({
  container: document.getElementById('aplayer'), //播放器容器元素
  fixed: true,		//开启吸底模式, 
  autoplay:	true,	 //音频自动播放
  theme: '#b7daff',	 //主题色
  audio: [
    {
      name: "一剑倾城",
      artist: 'Pig小优',
      url: urlMusic+'aplay_music/01.mp3',
      cover: urlMusic +'img/25156.png',
    },
    {
      name: "南妖- 群星-南妖",
      artist: '',
      url: urlMusic+'aplay_music/南妖- 群星-南妖.mp3',
      cover: urlMusic +'img/32724.png',
    },
    {
      name: "黎明前的黑暗",
      artist: '',
      url: urlMusic+'aplay_music/黎明前的黑暗.mp3',
      cover: urlMusic +'img/132644.png',
    },
    {
      name: 'In The Eyes',
      artist: '江映东',
      url: 'http://www.ytmp3.cn/down/53053.mp3',
      cover: 'http://img.ytmp3.cn/image/10.jpg',
    },
    {
      name: "违心的谎话 - 夏婉安",
      artist: '',
      url: urlMusic+'aplay_music/违心的谎话 - 夏婉安.mp3',
      cover: urlMusic +'img/59458.png',
    }
  ]
});

// 展开侧边栏音乐
var aplay = true;
$(".aplayer-miniswitcher .aplayer-icon")[0].onclick = function(){
	if(aplay){
		$('#aplayer').css({"left":0});
		aplay = false;
	}else{
		$('#aplayer').css({"left":"-66px"});
		aplay = true;
	}
};
