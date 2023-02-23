import db from './db';

export default function fetch(commentIds) {
  return Promise.all(
    commentIds.map(async (id) => {
      const data = await db.child('item').child(id).once('value');
      const item = data.val();
      return {
        id: item.id,
        user: item.by,
        text: item.text,
        date: new Date(item.time * 1000).toISOString(),
        comments: await fetch(item.kids || []),
        commentsCount: item.descendants || 0,
      }
    })
  )
}