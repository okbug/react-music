/**
 * 歌曲类模型
 */

function filterSinger(singers) {
  if (!Array.isArray(singers) || !singers.length) {
    return ''
  }
  let arr = []
  singers.forEach(item => {
    arr.push(item.name)
  })
  return arr.join('/')
}

export class Song {
  constructor({ id, name, singer, album, image, duration }) {
    this.id = id //歌曲ID
    this.name = name //歌曲名称
    this.singer = singer //歌手
    this.album = album //专辑
    this.image = image //封面图
    this.duration = duration //时长
    // this.url = url //URL地址
  }
}

export function createSongs(music) {
  if (music.dt !== undefined) {
    return new Song({
      id: music.id,
      name: music.name,
      singer: filterSinger(music.ar),
      album: music.al.name,
      image: music.al.picUrl || null,
      duration: music.dt / 1000
      // url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
    })
  }
  return new Song({
    id: music.id,
    name: music.name,
    singer: filterSinger(music.artists),
    album: music.album.name,
    image: music.album.picUrl || null,
    duration: music.duration / 1000
    // url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
  })
}

// 歌曲数据格式化
const formatSongs = function(list) {
  let Songs = []
  list.forEach(item => {
    if (item.id) {
      Songs.push(createSongs(item))
    }
  })
  return Songs
}

export default formatSongs
