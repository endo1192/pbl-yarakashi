
interface Bques1Props {
  arrayn: number[];
  answer: number[];
  selected: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req }: any) {
  // リクエストのURLからクエリパラメータを取得する
  const query = new URL(req.url || '', `http://${req.headers.host}`).searchParams;

  const selected = query.get('selected') ? parseInt(query.get('selected') as string, 10) : 0;


  
  // arraynとanswerをパース
  let Carray: number[] = [];
  const arrayn = query.get('arrayn');
  if (arrayn) {
    try {
      Carray = JSON.parse(arrayn);
    } catch (error) {
      console.error("Failed to parse arrayn:", error);
    }
  }

  let Canswer: number[] = [];
  const answer = query.get('answer');
  if (answer) {
    try {
      Canswer = JSON.parse(answer);
    } catch (error) {
      console.error("Failed to parse answer:", error);
    }
  }

  return {
    props: {
      selected,
      arrayn: Carray,
      answer: Canswer,
    },
  };
}

export default function Bans1({ arrayn, answer, selected }: Bques1Props) {
  


  const Carray = arrayn;
  const Canswer = answer;

  const Kaito: string[] = ["d","d","d","d","d","d","d","d","d","d","d","d","d","d"]

  for(let i = 0;i<=13;i++){
    if(Canswer[i] == 0){
      Kaito[i] = "不正解です"
    }else if(Canswer[i] == 1){
      Kaito[i] = "正解です"
    }else{Kaito[i] = "error"}
  }

  const Kaisetsu: string[] = ["d","d","d","d","d","d","d","d","d","d","d","d","d","d"]

  for(let i = 0;i<=13;i++){
    switch(Carray[i]){
      case 1:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `１．歩いている時に、LINEの通知が鳴った。 

〇：スマホを見ると危ないので、歩きながら確認はしない。 

×：通知の内容が気になるので、歩きながら確認する。 

△：周りに目を配り、気を付けながら確認する。 

 

解説 

〇　歩いている最中にスマホを使うことは事故にも繋がってしまうことも、、、！歩きスマホをしないことは自分の命を守る行動に繋がります◎ 

 

×　歩きスマホは事故やけがに繋がることも、、、絶対にやめましょう！ 

 

△　周りに車や自転車、歩いている人がいないことを確認することは大切です！でも、歩きながらスマホを使うと周りに目を配ることを忘れてしまう、、なんてことも、、 

 

　歩きスマホは歩行者や車、自転車などと事故になる可能性がある危険な行為です。法律では禁止されていませんが、条例で歩きスマホが禁止されている地域もあります。歩いている最中に友達から連絡がきたときすぐに確認したい！返信したい！と思ってしまいますが、どうしても返信をしたいときは歩きながらではなく一度立ち止まってからスマホを使いましょう◎急に立ち止まると後ろを歩いている人もびっくりしてしまうので、立ち止まるときも周りの確認を忘れずに！ `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `１．歩いている時に、LINEの通知が鳴った。 

〇：スマホを見ると危ないので、歩きながら確認はしない。 

×：通知の内容が気になるので、歩きながら確認する。 

△：周りに目を配り、気を付けながら確認する。 

 

解説 

〇　歩いている最中にスマホを使うことは事故にも繋がってしまうことも、、、！歩きスマホをしないことは自分の命を守る行動に繋がります◎ 

 

×　歩きスマホは事故やけがに繋がることも、、、絶対にやめましょう！ 

 

△　周りに車や自転車、歩いている人がいないことを確認することは大切です！でも、歩きながらスマホを使うと周りに目を配ることを忘れてしまう、、なんてことも、、 

 

　歩きスマホは歩行者や車、自転車などと事故になる可能性がある危険な行為です。法律では禁止されていませんが、条例で歩きスマホが禁止されている地域もあります。歩いている最中に友達から連絡がきたときすぐに確認したい！返信したい！と思ってしまいますが、どうしても返信をしたいときは歩きながらではなく一度立ち止まってからスマホを使いましょう◎急に立ち止まると後ろを歩いている人もびっくりしてしまうので、立ち止まるときも周りの確認を忘れずに！ `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 2:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `寝なければならない時間だが、スマホを使いたい。 

〇：明日の学校に影響が出るためベッドに行く 

×：スマホを使いたいからまだ寝ない 

△：あと二時間したら、ベッドへ行く 

 

解説 

〇　スマホ＜睡眠時間です！何時まではスマホを使える！とルールを決めたり、スマホを使いすぎて他のことに影響が出ちゃう、、なんてことがないようにしましょう◎ 

 

×　スマホに夢中になりすぎて夜更かししちゃう、、ってこともあるかもしれませんが、次の日学校の授業で寝ちゃう、元気が出ないなどなど、、、生活に良くない影響だらけです。 

 

△　自分でスマホを使う時間を決めるのは良いことです◎ですが、寝なければいけない時間からプラスで２時間は少しながすぎるかも？ 

 

　ルールを作ってスマホを使うことが重要です！スマホを使いすぎて生活習慣が崩れるのはNGです。睡眠時間をとれないとからだにもよくないです。友達と連絡をとる、動画を見るなど楽しいことも多いけれど、時間を決めて使いましょう。 

　スマホを使いすぎで睡眠不足⇒次の日学校でも眠い、授業中に寝てしまう⇒先生に注意されてしまう、、いいことありません。スマホを使うルールを決めることで、規則正しく楽しく生活しましょう♪ `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `寝なければならない時間だが、スマホを使いたい。 

〇：明日の学校に影響が出るためベッドに行く 

×：スマホを使いたいからまだ寝ない 

△：あと二時間したら、ベッドへ行く 

 

解説 

〇　スマホ＜睡眠時間です！何時まではスマホを使える！とルールを決めたり、スマホを使いすぎて他のことに影響が出ちゃう、、なんてことがないようにしましょう◎ 

 

×　スマホに夢中になりすぎて夜更かししちゃう、、ってこともあるかもしれませんが、次の日学校の授業で寝ちゃう、元気が出ないなどなど、、、生活に良くない影響だらけです。 

 

△　自分でスマホを使う時間を決めるのは良いことです◎ですが、寝なければいけない時間からプラスで２時間は少しながすぎるかも？ 

 

　ルールを作ってスマホを使うことが重要です！スマホを使いすぎて生活習慣が崩れるのはNGです。睡眠時間をとれないとからだにもよくないです。友達と連絡をとる、動画を見るなど楽しいことも多いけれど、時間を決めて使いましょう。 

　スマホを使いすぎで睡眠不足⇒次の日学校でも眠い、授業中に寝てしまう⇒先生に注意されてしまう、、いいことありません。スマホを使うルールを決めることで、規則正しく楽しく生活しましょう♪ `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 3:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `SNSでゲームをくれるという人と仲良くなり、会う日時を提示された。 

〇：ネットでしかつながりの無い人には会わない。 

×：ゲームが欲しいので会いに行く。 

△：ゲームは欲しいので、親と一緒に会いに行く。 

 

解説 

〇　ネット上では仲が良くても、それはネットの中の話です！相手が話していることがすべて正しいとは限りません。知らない人に会うことは危険です 

 

×　相手がどんな人なのか知っていますか、、？男の人なのか女の人なのか、何歳なのか、教えてもらったとしても本当のことを言っているかわからないし、ゲームを持っていることが本当なのかもわかりません。 

 

△　親がついてきてくれても危険なことに巻き込まれる可能性はゼロではありません。会わないことが一番です 

 

　SNSで出会った人が言うことは全て事実とは限りません！もしかしたらあなたを騙して悪いことを企んでいる人かもしれません。そんなことないでしょ～！って思うかもしれませんが、実際に事件に発展した例も多くあります。相手が自分の写真を送ってきたとしてもその写真が本人というかく確証はありません、、 

　同じ趣味の人とネットを通して出会うことも簡単になりましたが、その場合でもいい人ばかりがいるわけではないと覚えておきましょう！ `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `SNSでゲームをくれるという人と仲良くなり、会う日時を提示された。 

〇：ネットでしかつながりの無い人には会わない。 

×：ゲームが欲しいので会いに行く。 

△：ゲームは欲しいので、親と一緒に会いに行く。 

 

解説 

〇　ネット上では仲が良くても、それはネットの中の話です！相手が話していることがすべて正しいとは限りません。知らない人に会うことは危険です 

 

×　相手がどんな人なのか知っていますか、、？男の人なのか女の人なのか、何歳なのか、教えてもらったとしても本当のことを言っているかわからないし、ゲームを持っていることが本当なのかもわかりません。 

 

△　親がついてきてくれても危険なことに巻き込まれる可能性はゼロではありません。会わないことが一番です 

 

　SNSで出会った人が言うことは全て事実とは限りません！もしかしたらあなたを騙して悪いことを企んでいる人かもしれません。そんなことないでしょ～！って思うかもしれませんが、実際に事件に発展した例も多くあります。相手が自分の写真を送ってきたとしてもその写真が本人というかく確証はありません、、 

　同じ趣味の人とネットを通して出会うことも簡単になりましたが、その場合でもいい人ばかりがいるわけではないと覚えておきましょう！ `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 4:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `お店でふざけている友達を撮影し、SNSに投稿した。 \n\n

〇：ふざけるのはよくないことだし、問題になる可能性があるのでそのようなことはしない。 

△：友達しか見られないので問題はない。 

×：友達も私も楽しいので何も問題はない。 

 

ある男性が、お寿司屋でふざけて醤油ボトルをなめるなどをし、その様子をインターネットに投稿した。この男性はどうなったか。 

〇：会社に大きな損失を出し、約6700万円の損害賠償を求めて会社は訴訟を起こした。 

〇：学校に苦情や誹謗中傷の電話が殺到した。 

〇：男性は自主退学をした。 

→「前橋市スーパー・アイスケース寝そべり事件」 

 

 ネットにアップした画像を削除したくなり、削除した。 

〇： 

×：１度ネットに挙げたものは完全に削除できない可能性が高い。 

 

〇：ふざけるのはよくないことだし、問題になる可能性があるのでそのようなことはしない 

これが正しい行動です！ 

お店の中で友達がふざけているのを見ても、その行動が迷惑行為であることを理解して止めるのが大切です。 
特に、SNSに投稿することで、その動画や写真が一生インターネット上に残る可能性があります。 

身近な例として、「前橋市スーパー・アイスケース寝そべり事件」あります。 

【事件の概要】 

群馬県前橋市のスーパーで、若い男性がアイスケースの中に寝そべった写真をSNSに投稿しました。 

結果として、お店はアイスクリームを全て撤去し、冷蔵ケースを消毒した上で、商品を入れ替えて販売したほか、商品の返金に応じるなどの対応に追われました。  

投稿した本人も厳しい批判を受け、謝罪しましたが、一度拡散した情報は消せず、退学となりました。 

このように、軽い気持ちで撮影して投稿したことが、お店や自分に大きな影響を与えることがあります。 
だから、そのような行動は絶対にしないようにしましょう！ 


 

 △：友達しか見られないので問題はない 

 
これも注意が必要です！ 

例えば、SNSの投稿を「フォロワー限定」にして、友達だけが見られる設定にしたとしても、100%安全とは言えません。 

友達がその投稿をスクリーンショットして、他の人に見せることがあるかもしれません。 

SNSの設定ミスで、本当は公開されていないはずの投稿が他の人にも見えてしまうことがあります。 

「限定公開だから安心」と思うのは危険です。SNSに投稿した瞬間、誰かが保存したり、他の人に見られるリスクがあることを理解しましょう。 

 

 ×：友達も私も楽しいので何も問題はない 

これは間違った考え方です！ 

「楽しいから問題ない」という考えで、ふざけた動画を投稿してしまうと大きなトラブルに発展することがあります。 

例えば… 

友達が将来困ることになる可能性があります。 

友達が就職活動をするときに、そのふざけた動画を見られたらどうでしょう？ 

「この人はルールを守れない人だ」と思われてしまうかもしれません。 

お店が被害を受けることもあります。 

お店の商品を雑に扱ったり、他のお客さんの迷惑になる行為は、そのお店の評判に関わります。 

SNSは、世界中の人が見られる場所です。 
「今は楽しい」と思っても、投稿した内容が未来に大きな問題を引き起こすことを理解しましょう。 `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `お店でふざけている友達を撮影し、SNSに投稿した。 \n

〇：ふざけるのはよくないことだし、問題になる可能性があるのでそのようなことはしない。 

△：友達しか見られないので問題はない。 

×：友達も私も楽しいので何も問題はない。 

 

ある男性が、お寿司屋でふざけて醤油ボトルをなめるなどをし、その様子をインターネットに投稿した。この男性はどうなったか。 

〇：会社に大きな損失を出し、約6700万円の損害賠償を求めて会社は訴訟を起こした。 

〇：学校に苦情や誹謗中傷の電話が殺到した。 

〇：男性は自主退学をした。 

→「前橋市スーパー・アイスケース寝そべり事件」 

 

 ネットにアップした画像を削除したくなり、削除した。 

〇： 

×：１度ネットに挙げたものは完全に削除できない可能性が高い。 

 

〇：ふざけるのはよくないことだし、問題になる可能性があるのでそのようなことはしない 

これが正しい行動です！ 

お店の中で友達がふざけているのを見ても、その行動が迷惑行為であることを理解して止めるのが大切です。 
特に、SNSに投稿することで、その動画や写真が一生インターネット上に残る可能性があります。 

身近な例として、「前橋市スーパー・アイスケース寝そべり事件」あります。 

【事件の概要】 

群馬県前橋市のスーパーで、若い男性がアイスケースの中に寝そべった写真をSNSに投稿しました。 

結果として、お店はアイスクリームを全て撤去し、冷蔵ケースを消毒した上で、商品を入れ替えて販売したほか、商品の返金に応じるなどの対応に追われました。  

投稿した本人も厳しい批判を受け、謝罪しましたが、一度拡散した情報は消せず、退学となりました。 

このように、軽い気持ちで撮影して投稿したことが、お店や自分に大きな影響を与えることがあります。 
だから、そのような行動は絶対にしないようにしましょう！ 

 

 △：友達しか見られないので問題はない 

これも注意が必要です！ 

例えば、SNSの投稿を「フォロワー限定」にして、友達だけが見られる設定にしたとしても、100%安全とは言えません。 

友達がその投稿をスクリーンショットして、他の人に見せることがあるかもしれません。 

SNSの設定ミスで、本当は公開されていないはずの投稿が他の人にも見えてしまうことがあります。 

「限定公開だから安心」と思うのは危険です。SNSに投稿した瞬間、誰かが保存したり、他の人に見られるリスクがあることを理解しましょう。 

 

 ×：友達も私も楽しいので何も問題はない 

これは間違った考え方です！ 

「楽しいから問題ない」という考えで、ふざけた動画を投稿してしまうと大きなトラブルに発展することがあります。 

例えば… 

友達が将来困ることになる可能性があります。 

友達が就職活動をするときに、そのふざけた動画を見られたらどうでしょう？ 

「この人はルールを守れない人だ」と思われてしまうかもしれません。 

お店が被害を受けることもあります。 

お店の商品を雑に扱ったり、他のお客さんの迷惑になる行為は、そのお店の評判に関わります。 

SNSは、世界中の人が見られる場所です。 
「今は楽しい」と思っても、投稿した内容が未来に大きな問題を引き起こすことを理解しましょう。 `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 5:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `「明日の服どっちがいいかな？」というメッセージが送られてきた。 

〇：「両方素敵だと思う」と返信する。 

×：「どっちでもいいんじゃない」と返信する。 

△：「私は〇〇が好きかな」と自分の好みを押しつける返信をする。 

 

〇：「両方素敵だと思う」と返信する 

これが正しい対応です！ 

相手は「どっちの服を着ようかな？」と迷っています。 
そのときに「両方素敵だよ！」と言われると、「どっちを選んでも大丈夫！」と安心できます。 
また、相手のセンスを肯定することで、自信を持って選ぶことができます。 

相手の気持ちを尊重し、前向きな気持ちになれる言葉を選びましょう。 

 

×：「どっちでもいいんじゃない」と返信する 

これは相手をがっかりさせる対応です。 

相手はあなたの意見を聞きたくて相談しているのに、「どっちでもいい」という返事は無関心に聞こえるため、「ちゃんと考えてくれていない」と感じさせてしまうかもしれません。 

相談されたときは、相手の気持ちに寄り添った返信を心がけましょう。 

 

△：「私は〇〇が好きかな」と自分の好みを押しつける返信をする 

一見、親切な返信に見えますが、相手の気持ちを考えていない場合があります。 

たとえば、 

友達：「明日の服どっちがいいかな？」 
あなた：「私は青い服のほうが好きかな！」 

このような返信をすると、相手は「青の服を選ばないといけないのかな…」と感じてしまうかもしれません。 

相談に対して自分の好みを押しつけるのではなく、相手が自分で選べるように背中を押してあげましょう！ `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `「明日の服どっちがいいかな？」というメッセージが送られてきた。 

〇：「両方素敵だと思う」と返信する。 

×：「どっちでもいいんじゃない」と返信する。 

△：「私は〇〇が好きかな」と自分の好みを押しつける返信をする。 

 

〇：「両方素敵だと思う」と返信する 

これが正しい対応です！ 

相手は「どっちの服を着ようかな？」と迷っています。 
そのときに「両方素敵だよ！」と言われると、「どっちを選んでも大丈夫！」と安心できます。 
また、相手のセンスを肯定することで、自信を持って選ぶことができます。 

相手の気持ちを尊重し、前向きな気持ちになれる言葉を選びましょう。 

 

×：「どっちでもいいんじゃない」と返信する 

これは相手をがっかりさせる対応です。 

相手はあなたの意見を聞きたくて相談しているのに、「どっちでもいい」という返事は無関心に聞こえるため、「ちゃんと考えてくれていない」と感じさせてしまうかもしれません。 

相談されたときは、相手の気持ちに寄り添った返信を心がけましょう。 

 

△：「私は〇〇が好きかな」と自分の好みを押しつける返信をする 

一見、親切な返信に見えますが、相手の気持ちを考えていない場合があります。 

たとえば、 

友達：「明日の服どっちがいいかな？」 
あなた：「私は青い服のほうが好きかな！」 

このような返信をすると、相手は「青の服を選ばないといけないのかな…」と感じてしまうかもしれません。 

相談に対して自分の好みを押しつけるのではなく、相手が自分で選べるように背中を押してあげましょう！ `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 6:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `Instagramに写真を投稿しようとしている。 

〇：あげる前にその投稿は本当にあげていいものか考える 

×：何も考えずに投稿する 

△：自分のアカウントは非公開設定にしていて、友達しか見られないので何を投稿しても問題ない。 

 

解説 

〇　写真を投稿する前に一度立ち止まることは大切です◎不適切なことじゃないか？この投稿を見て嫌な気持ちになる人はいないか？知らない人から個人情報を特定されないか？など一度投稿する前に再確認しましょう！ 

 

×　友人の写真を無許可で投稿してしまい友達を怒らせてしまった、今いる場所を写真を投稿し知らない人から居場所を特定されてしまったなど、たった写真一枚でもトラブルになることがあります。 

 

△　もしかしたら友達がスクリーンショットをして他の人に見せているかも？という可能性もあります。鍵垢、公開垢どちらにしても写真を投稿する際には慎重に！ 

 

　写真一枚でも大きな問題に発展してしまう可能性があります。特にInstagramで多いのはストーリーの問題です。24時間で消えるとしても、誰が写真を保存しているか分かりません。また、下のようなことが起こることも、、 

 

仲のいいAちゃん、Bちゃん、Cちゃんがいます。 

AちゃんがInstagramのストーリーに親しい友達限定で写真を投稿 

Bちゃん「Aちゃんのストーリー見たでしょ？」 

Cちゃん「ストーリーなんかあがってたっけ？」 

Bちゃんは親しい友達に入っていたけれど、C ちゃんは入っていませんでした。伝えてしまったBちゃんも気まずく、AちゃんとCちゃんの関係にも亀裂がはいってしまう可能性も、、 

 

　写真を投稿する際は今一度確認してから！！`
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `Instagramに写真を投稿しようとしている。 

〇：あげる前にその投稿は本当にあげていいものか考える 

×：何も考えずに投稿する 

△：自分のアカウントは非公開設定にしていて、友達しか見られないので何を投稿しても問題ない。 

 

解説 

〇　写真を投稿する前に一度立ち止まることは大切です◎不適切なことじゃないか？この投稿を見て嫌な気持ちになる人はいないか？知らない人から個人情報を特定されないか？など一度投稿する前に再確認しましょう！ 

 

×　友人の写真を無許可で投稿してしまい友達を怒らせてしまった、今いる場所を写真を投稿し知らない人から居場所を特定されてしまったなど、たった写真一枚でもトラブルになることがあります。 

 

△　もしかしたら友達がスクリーンショットをして他の人に見せているかも？という可能性もあります。鍵垢、公開垢どちらにしても写真を投稿する際には慎重に！ 

 

　写真一枚でも大きな問題に発展してしまう可能性があります。特にInstagramで多いのはストーリーの問題です。24時間で消えるとしても、誰が写真を保存しているか分かりません。また、下のようなことが起こることも、、 

 

仲のいいAちゃん、Bちゃん、Cちゃんがいます。 

AちゃんがInstagramのストーリーに親しい友達限定で写真を投稿 

Bちゃん「Aちゃんのストーリー見たでしょ？」 

Cちゃん「ストーリーなんかあがってたっけ？」 

Bちゃんは親しい友達に入っていたけれど、C ちゃんは入っていませんでした。伝えてしまったBちゃんも気まずく、AちゃんとCちゃんの関係にも亀裂がはいってしまう可能性も、、 

 

　写真を投稿する際は今一度確認してから！！`
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 7:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `パスワードを設定しよう 

〇：自分にしかわからない複雑なパスワードにする 

×：自分の名前や生年月日に設定する 

△：覚えやすいので、他のサイトでも使っているパスワードと同じパスワードを設定する。 

 

解説 

〇　簡単に他人にばれないようなパスワードにしましょう！覚えられないよ～という場合は、メモをしてパスワードをきちんと管理をしましょう 

 

×　名前や誕生日は他人から推測されやすいです！SNSアカウントを乗っ取られたり、知らないうちに高額な買いものをされていたりする可能性も、、 

 

 

 

　パスワードを設定するときは他の人から推測されないようなものにすることが大切です！そしてパスワードを使いまわさないこと！個人情報の流出やアカウントの乗っ取り、クレジットカードの不正利用などされてしまうことを防ぎましょう！だれがそんなことするの？と思う人もいるかもしれませんが、意外とすぐ近くにパスワードの不正を行うひとはいます、、実際に友達のInstagramに勝手にログインしたりする人や友達のスマホを勝手に利用したりする人がいます。 

　パスワードを設定するときは、アルファベットの大文字小文字、数字、場合によっては記号を取り入れること！そして、名前や誕生日など分かりやすいキーワードをつかわずに複雑にすること！が重要です。`
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `パスワードを設定しよう 

〇：自分にしかわからない複雑なパスワードにする 

×：自分の名前や生年月日に設定する 

△：覚えやすいので、他のサイトでも使っているパスワードと同じパスワードを設定する。 

 

解説 

〇　簡単に他人にばれないようなパスワードにしましょう！覚えられないよ～という場合は、メモをしてパスワードをきちんと管理をしましょう 

 

×　名前や誕生日は他人から推測されやすいです！SNSアカウントを乗っ取られたり、知らないうちに高額な買いものをされていたりする可能性も、、 

 

 

 

　パスワードを設定するときは他の人から推測されないようなものにすることが大切です！そしてパスワードを使いまわさないこと！個人情報の流出やアカウントの乗っ取り、クレジットカードの不正利用などされてしまうことを防ぎましょう！だれがそんなことするの？と思う人もいるかもしれませんが、意外とすぐ近くにパスワードの不正を行うひとはいます、、実際に友達のInstagramに勝手にログインしたりする人や友達のスマホを勝手に利用したりする人がいます。 

　パスワードを設定するときは、アルファベットの大文字小文字、数字、場合によっては記号を取り入れること！そして、名前や誕生日など分かりやすいキーワードをつかわずに複雑にすること！が重要です。`
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 8:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `「個人情報を24時間以内に送信しないとゲームが使えなくなる」という通知が来た。 

〇：怪しいので送らない。 

△：自分の個人情報を送信するのは怖いので、親の情報を送信した。 

×：個人情報を入力して送る。 

 

〇：怪しいので送らない。 

これが正しい対応です！ 

「〇〇しないとゲームが使えなくなる」という通知は、不安をあおって冷静な判断をさせなくするのが狙いです。 
本当にゲームの運営から連絡がある場合は、公式の方法（アプリ内の通知や公式サイト）で連絡が来ます。 
怪しい通知やメッセージは無視するのが一番安全です！見知らぬ相手に個人情報を送るのは絶対にやめましょう。 

 

 ×：個人情報を入力して送る。 

これは最も危険な対応です。 

個人情報を送信してしまうと、次のようなトラブルに巻き込まれる可能性があります。 

アカウントを乗っ取られる。 

クレジットカード情報が盗まれる。 

自分になりすまして悪用される。 

特にパスワードや住所、電話番号などの情報を入力するのは絶対に避けましょう。本物かどうか分からない通知には絶対に個人情報を送らないこと！ 

 

△：自分の個人情報を送信するのは怖いので、親の情報を送信した。 

これも危険な対応です。 

「自分の情報は怖いから親の情報なら大丈夫かな？」と思うかもしれませんが、誰の情報であっても送信してはいけません。 
親の情報が盗まれると、クレジットカードの不正利用や身分証の悪用などのトラブルが発生する可能性があります。 

例えば… 

「親の名前」「住所」「電話番号」を送信してしまう。 

それを使って犯罪者がクレジットカードを作成したり、借金をすることもあります。 

他人の情報を送るのも絶対にダメ！自分も周りの人も守るために「怪しい」と思ったら無視しましょう。 `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `「個人情報を24時間以内に送信しないとゲームが使えなくなる」という通知が来た。 

〇：怪しいので送らない。 

△：自分の個人情報を送信するのは怖いので、親の情報を送信した。 

×：個人情報を入力して送る。 

 

〇：怪しいので送らない。 

これが正しい対応です！ 

「〇〇しないとゲームが使えなくなる」という通知は、不安をあおって冷静な判断をさせなくするのが狙いです。 
本当にゲームの運営から連絡がある場合は、公式の方法（アプリ内の通知や公式サイト）で連絡が来ます。 
怪しい通知やメッセージは無視するのが一番安全です！見知らぬ相手に個人情報を送るのは絶対にやめましょう。 

 

 ×：個人情報を入力して送る。 

これは最も危険な対応です。 

個人情報を送信してしまうと、次のようなトラブルに巻き込まれる可能性があります。 

アカウントを乗っ取られる。 

クレジットカード情報が盗まれる。 

自分になりすまして悪用される。 

特にパスワードや住所、電話番号などの情報を入力するのは絶対に避けましょう。本物かどうか分からない通知には絶対に個人情報を送らないこと！ 

 

△：自分の個人情報を送信するのは怖いので、親の情報を送信した。 

これも危険な対応です。 

「自分の情報は怖いから親の情報なら大丈夫かな？」と思うかもしれませんが、誰の情報であっても送信してはいけません。 
親の情報が盗まれると、クレジットカードの不正利用や身分証の悪用などのトラブルが発生する可能性があります。 

例えば… 

「親の名前」「住所」「電話番号」を送信してしまう。 

それを使って犯罪者がクレジットカードを作成したり、借金をすることもあります。 

他人の情報を送るのも絶対にダメ！自分も周りの人も守るために「怪しい」と思ったら無視しましょう。 `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 9:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `SNSで高額なバイトを見つけた 

〇：内容を確認し、怪しいので応募しない 

×：お金がないので、そのバイトに応募する 

△：友達がやっているから、自分もそのバイトに応募する 

 

解説 

〇：内容を確認し、怪しいので応募しない 

これが正しい行動です！ 

SNSには「時給1万円！」「簡単作業で高収入！」といった、とてもおいしい話がよくあります。でも、よく考えてください。 

普通のバイトで、そんなに簡単に大金をもらえる仕事はありませんよね？ 

例えば、友達が「ポテトを揚げるだけで時給1万円もらえるよ！」と言ったら、どう思いますか？ 
「そんな仕事、ちょっと怪しくない？」って思いませんか？ 
実際、そういう高額バイトの多くは、詐欺の可能性があります。個人情報を盗まれたり、逆にお金をだまし取られたりすることもあります。 

だから、少しでも怪しいと思ったら、応募しないのが一番です！ 

 

×：お金がないので、そのバイトに応募する 

これは危険な行動です。 

「お小遣いが足りない…」「新しいゲームが欲しい…」という気持ちは分かります。でも、SNSで見つけた高額バイトは、詐欺の可能性が高いです。 

例えば、ある人が「簡単な作業で1日5万円稼げる！」というバイトに応募したとします。最初に「仕事に必要だから」と個人情報を聞かれて教えてしまいました。その結果、個人情報を使い脅され、バイトをやめられなくなってしまう…。 
こんなトラブルが実際に起こっています！ 

SNSに載っているバイトは、簡単に応募してはいけません。「本当に信じられる仕事か？」を必ず確認しましょう。 

 

△：友達がやっているから、自分もそのバイトに応募する 

これも注意が必要です！ 

「友達がやっているから大丈夫」と思うかもしれませんが、友達も騙されている可能性があります。 

例えば、友達が「このバイト、めっちゃ簡単だよ！」と言っていたとしても、その友達も本当の内容を知らない場合があります。最初はお金がもらえるかもしれませんが、だんだん怪しい仕事をさせられたり、個人情報を抜き取られたりすることがあります。 

大切なのは、友達がやっているからといって安心しないこと！ 
自分でよく調べて、「怪しい」と感じたらすぐにやめましょう`
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `SNSで高額なバイトを見つけた 

〇：内容を確認し、怪しいので応募しない 

×：お金がないので、そのバイトに応募する 

△：友達がやっているから、自分もそのバイトに応募する 

 

解説 

〇：内容を確認し、怪しいので応募しない 

これが正しい行動です！ 

SNSには「時給1万円！」「簡単作業で高収入！」といった、とてもおいしい話がよくあります。でも、よく考えてください。 

普通のバイトで、そんなに簡単に大金をもらえる仕事はありませんよね？ 

例えば、友達が「ポテトを揚げるだけで時給1万円もらえるよ！」と言ったら、どう思いますか？ 
「そんな仕事、ちょっと怪しくない？」って思いませんか？ 
実際、そういう高額バイトの多くは、詐欺の可能性があります。個人情報を盗まれたり、逆にお金をだまし取られたりすることもあります。 

だから、少しでも怪しいと思ったら、応募しないのが一番です！ 

 

×：お金がないので、そのバイトに応募する 

これは危険な行動です。 

「お小遣いが足りない…」「新しいゲームが欲しい…」という気持ちは分かります。でも、SNSで見つけた高額バイトは、詐欺の可能性が高いです。 

例えば、ある人が「簡単な作業で1日5万円稼げる！」というバイトに応募したとします。最初に「仕事に必要だから」と個人情報を聞かれて教えてしまいました。その結果、個人情報を使い脅され、バイトをやめられなくなってしまう…。 
こんなトラブルが実際に起こっています！ 

SNSに載っているバイトは、簡単に応募してはいけません。「本当に信じられる仕事か？」を必ず確認しましょう。 

 

△：友達がやっているから、自分もそのバイトに応募する 

これも注意が必要です！ 

「友達がやっているから大丈夫」と思うかもしれませんが、友達も騙されている可能性があります。 

例えば、友達が「このバイト、めっちゃ簡単だよ！」と言っていたとしても、その友達も本当の内容を知らない場合があります。最初はお金がもらえるかもしれませんが、だんだん怪しい仕事をさせられたり、個人情報を抜き取られたりすることがあります。 

大切なのは、友達がやっているからといって安心しないこと！ 
自分でよく調べて、「怪しい」と感じたらすぐにやめましょう`
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 10:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `通信制限がかかっているので、Wi-Fiに接続したい。 

〇：いつも使っている信頼できるWi-Fiに接続する。 

×：よく分からないWi-Fiに接続する。 

△：知ってる会社の名前が入っているWi-Fiに接続する。 

 

〇：いつも使っている信頼できるWi-Fiに接続する 

これが正しい行動です！ 

例えば、自分の家のWi-Fiや、学校で許可されているWi-Fiなら、信頼できるWi-Fiです。 
こういったWi-Fiは、パスワードが設定されていて、安全に保護されています。 

知らないWi-Fiは危険ですが、普段から使っていて信頼できるWi-Fiなら、安心して接続できます。 
ただし、パスワードが設定されていないWi-Fiは、誰でもアクセスできるので避けた方がいいです。 

 

×：よく分からないWi-Fiに接続する 

これは絶対にやってはいけません！ 

街中で「無料Wi-Fi」という表示を見かけたことはありませんか？ 
「ラッキー！通信制限中だし、使ってみよう」と思うかもしれませんが、とても危険です。 

例えば、悪意のある人が「無料Wi-Fi」と見せかけて危険なWi-Fiを設置している場合があります。そのWi-Fiに接続してしまうと… 

スマホの中の情報が盗まれる 

パスワードが漏れてしまう 

勝手にウイルスが入る 

というトラブルが起こる可能性があります。 
知らないWi-Fiには、絶対に接続しないようにしましょう！ 

 

△：知っている会社の名前が入っているWi-Fiに接続する 

これも注意が必要です！ 

「〇〇_cafe_WiFi」や「Company_Free_WiFi」といった、知っている会社名が入ったWi-Fiを見かけることがあります。 

一見、安全そうに見えますが、これも危険な場合があります。 
悪意のある人が本物のWi-Fiに見せかけた偽物のWi-Fiを作っていることもあるからです。 

例えば、スターバックスに行ったとき、「Starbucks_Free_WiFi」というWi-Fiがあったらどうでしょう？ 
本物っぽく見えますが、実際には悪意のある人が作った偽物の可能性もあるのです。 

本物のWi-Fiかどうかは、必ずお店の人に確認しましょう。`
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `通信制限がかかっているので、Wi-Fiに接続したい。 

〇：いつも使っている信頼できるWi-Fiに接続する。 

×：よく分からないWi-Fiに接続する。 

△：知ってる会社の名前が入っているWi-Fiに接続する。 

 

〇：いつも使っている信頼できるWi-Fiに接続する 

これが正しい行動です！ 

例えば、自分の家のWi-Fiや、学校で許可されているWi-Fiなら、信頼できるWi-Fiです。 
こういったWi-Fiは、パスワードが設定されていて、安全に保護されています。 

知らないWi-Fiは危険ですが、普段から使っていて信頼できるWi-Fiなら、安心して接続できます。 
ただし、パスワードが設定されていないWi-Fiは、誰でもアクセスできるので避けた方がいいです。 

 

×：よく分からないWi-Fiに接続する 

これは絶対にやってはいけません！ 

街中で「無料Wi-Fi」という表示を見かけたことはありませんか？ 
「ラッキー！通信制限中だし、使ってみよう」と思うかもしれませんが、とても危険です。 

例えば、悪意のある人が「無料Wi-Fi」と見せかけて危険なWi-Fiを設置している場合があります。そのWi-Fiに接続してしまうと… 

スマホの中の情報が盗まれる 

パスワードが漏れてしまう 

勝手にウイルスが入る 

というトラブルが起こる可能性があります。 
知らないWi-Fiには、絶対に接続しないようにしましょう！ 

 

△：知っている会社の名前が入っているWi-Fiに接続する 

これも注意が必要です！ 

「〇〇_cafe_WiFi」や「Company_Free_WiFi」といった、知っている会社名が入ったWi-Fiを見かけることがあります。 

一見、安全そうに見えますが、これも危険な場合があります。 
悪意のある人が本物のWi-Fiに見せかけた偽物のWi-Fiを作っていることもあるからです。 

例えば、スターバックスに行ったとき、「Starbucks_Free_WiFi」というWi-Fiがあったらどうでしょう？ 
本物っぽく見えますが、実際には悪意のある人が作った偽物の可能性もあるのです。 

本物のWi-Fiかどうかは、必ずお店の人に確認しましょう。`
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 11:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `代わりにゲームをクリアしてくれるというネットのゲーム友達に自分のアカウントの情報を教えようとしている。  

〇：アカウントにログインできると、大切な情報を閲覧・悪用される可能性があるので安易に自分のアカウントの情報を教えてはいけない。  

×：アカウントのIDとパスワードを教えるだけなら問題ないのでこれらを教える。  

×：ゲームを進めたいのですぐに教える。  

  

解説 

×：ゲームを進めたいのですぐに教える。 

←アカウントの情報を教えてはいけません。勝手に課金される、アカウントを乗っ取られる、ポイントやアイテムを奪われる、クラウドに保存した写真を盗み見られるなどのトラブルが起きています。たとえ親しい人でもID・パスワードを教えてはダメ、他人のID・パスワードでのログインは絶対ダメです（不正アクセス禁止法違反）。 

×：アカウントのIDとパスワードを教えるだけなら問題ないのでこれらを教える。 

←アカウントのIDとパスワードを教えてしまうと、アカウントにログインできてしまうことがあります。 

  

さらに詳しく 

A甘い誘いはワナの可能性が 

アカウントを乗っ取るために、ID・パスワードを聞き出そうとする人もいます。聞かれても答えないのはもちろん、プロフィールやゲーム中のやりとりから推測できそうなパスワードは絶対に使わないで！ 

B課金する前に必要なこと 

課金は契約なので、18歳になるまでは保護者の同意を得なければなりません。課金をしてよいか、いくらまで課金するか、誰のお金を使うかなど、必ず保護者と相談しましょう。 

Cボイスチャットはさらに注意 

ゲーム内の会話がきっかけのトラブルも増えています。ネットだけの友達がいる場では、個人がわかる情報が伝わらないよう、話す内容、マイクで拾う音など、細かな注意が必要です。 `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `代わりにゲームをクリアしてくれるというネットのゲーム友達に自分のアカウントの情報を教えようとしている。  

〇：アカウントにログインできると、大切な情報を閲覧・悪用される可能性があるので安易に自分のアカウントの情報を教えてはいけない。  

×：アカウントのIDとパスワードを教えるだけなら問題ないのでこれらを教える。  

×：ゲームを進めたいのですぐに教える。  

  

解説 

×：ゲームを進めたいのですぐに教える。 

←アカウントの情報を教えてはいけません。勝手に課金される、アカウントを乗っ取られる、ポイントやアイテムを奪われる、クラウドに保存した写真を盗み見られるなどのトラブルが起きています。たとえ親しい人でもID・パスワードを教えてはダメ、他人のID・パスワードでのログインは絶対ダメです（不正アクセス禁止法違反）。 

×：アカウントのIDとパスワードを教えるだけなら問題ないのでこれらを教える。 

←アカウントのIDとパスワードを教えてしまうと、アカウントにログインできてしまうことがあります。 

  

さらに詳しく 

A甘い誘いはワナの可能性が 

アカウントを乗っ取るために、ID・パスワードを聞き出そうとする人もいます。聞かれても答えないのはもちろん、プロフィールやゲーム中のやりとりから推測できそうなパスワードは絶対に使わないで！ 

B課金する前に必要なこと 

課金は契約なので、18歳になるまでは保護者の同意を得なければなりません。課金をしてよいか、いくらまで課金するか、誰のお金を使うかなど、必ず保護者と相談しましょう。 

Cボイスチャットはさらに注意 

ゲーム内の会話がきっかけのトラブルも増えています。ネットだけの友達がいる場では、個人がわかる情報が伝わらないよう、話す内容、マイクで拾う音など、細かな注意が必要です。 `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 12:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `面白い漫画があったので、写真に撮ってSNSにアップした。 

〇：著作権法違反となる可能性があるのでしてはいけない。  

×：その行為によってお金を稼いでいる訳ではないので問題ない。 

×：アップするとたくさんの人がSNSを見てくれ、お互い良い思いをしているので良いことである。 

  

解説 

×：その行為によってお金を稼いでいる訳ではないので問題ない。 

←著作物を無許可でアップロードすることは、著作権侵害となるのでしてはいけません。その行為によってお金を稼いでいなくてもダメです。 

×：アップするとたくさんの人がSNSを見てくれ、お互い良い思いをしているので良いことである。 

←作者はその行為によって苦しめられてしまいます。 

  

さらに詳しく 

A作者を苦しめることになる 

自分の作品が無断で思わぬ使われ方をされると、作者や制作に関わる人たちは嫌な思いをします。大好きな作品ならなおさら、作る側の人たちのことを想像して行動しましょう。 

B次の作品が生まれなくなる 

作品ごとに、作者、演奏者、歌手、制作会社ほか多くの関係者がいて、大変な苦労をして作品を生み出しています。たくさんの人に向けて許可なくアップロードされれば、本来得られるはずの対価（お金）が入らなくなってしまいます。 

Cスクリーンショットや画面録画は？ 

動画やライブ配信の映像をスクリーンショット・画面録画することは、禁止されている場合が多く、録画などしたものをSNSでアップロード、販売すれば著作権侵害となります。もちろん、違法なものと知りつつダウンロードする行為も侵害となります。 `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `面白い漫画があったので、写真に撮ってSNSにアップした。 

〇：著作権法違反となる可能性があるのでしてはいけない。  

×：その行為によってお金を稼いでいる訳ではないので問題ない。 

×：アップするとたくさんの人がSNSを見てくれ、お互い良い思いをしているので良いことである。 

  

解説 

×：その行為によってお金を稼いでいる訳ではないので問題ない。 

←著作物を無許可でアップロードすることは、著作権侵害となるのでしてはいけません。その行為によってお金を稼いでいなくてもダメです。 

×：アップするとたくさんの人がSNSを見てくれ、お互い良い思いをしているので良いことである。 

←作者はその行為によって苦しめられてしまいます。 

  

さらに詳しく 

A作者を苦しめることになる 

自分の作品が無断で思わぬ使われ方をされると、作者や制作に関わる人たちは嫌な思いをします。大好きな作品ならなおさら、作る側の人たちのことを想像して行動しましょう。 

B次の作品が生まれなくなる 

作品ごとに、作者、演奏者、歌手、制作会社ほか多くの関係者がいて、大変な苦労をして作品を生み出しています。たくさんの人に向けて許可なくアップロードされれば、本来得られるはずの対価（お金）が入らなくなってしまいます。 

Cスクリーンショットや画面録画は？ 

動画やライブ配信の映像をスクリーンショット・画面録画することは、禁止されている場合が多く、録画などしたものをSNSでアップロード、販売すれば著作権侵害となります。もちろん、違法なものと知りつつダウンロードする行為も侵害となります。 `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 13:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `ライブのチケットについて。  

〇：公式の販売でチケットをとれなかったので、公式のリセールサイトを利用してチケットの獲得を試みる。  

×：公式の販売でチケットをとれなかったので、フリマサイトで転売されているチケットを購入する。  

×：チケットが余ってしまった。なので、チケットをフリマサイトで定価よりも高い値段で売った。 

  

解説 

×：公式の販売でチケットをとれなかったので、フリマサイトで転売されているチケットを購入する。  

←フリマサイトで転売されているチケットを購入してはいけません。転売チケットを買うためにお金を振り込んでもチケットが届かない可能性があります（詐欺）。また、転売チケットでは入場できない場合があります。公式のリセールサイトを利用しましょう。 

×：チケットが余ってしまった。なので、チケットをフリマサイトで定価よりも高い値段で売った。 

←チケット不正転売禁止法 にあたるので、してはいけません。 

  

さらに詳しく 

 A利用規約やルールを守る 

好きなアーティストやスポーツは、決まりを守って楽しみたい！法律や危険を犯してまで不正転売するのはやめましょう。また転売目的で転売品を買うのもアウトです。 

B行ける日×人数で申し込む 

チケットを多めに購入し、良い席だけ残して残りを高額転売した場合も違法とみなされるかも。 

チケットは利用できる範囲で購入するよう心がけましょう。 

C正しいルート以外の売買には危険が 

最近はSNSなどでの売買もよく見られますが、確認した正しいルートで売買しましょう。売ったチケットなどを利用するために教えた本人確認情報を悪用されてしまうこともあるので注意しましょう。 `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `ライブのチケットについて。  

〇：公式の販売でチケットをとれなかったので、公式のリセールサイトを利用してチケットの獲得を試みる。  

×：公式の販売でチケットをとれなかったので、フリマサイトで転売されているチケットを購入する。  

×：チケットが余ってしまった。なので、チケットをフリマサイトで定価よりも高い値段で売った。 

  

解説 

×：公式の販売でチケットをとれなかったので、フリマサイトで転売されているチケットを購入する。  

←フリマサイトで転売されているチケットを購入してはいけません。転売チケットを買うためにお金を振り込んでもチケットが届かない可能性があります（詐欺）。また、転売チケットでは入場できない場合があります。公式のリセールサイトを利用しましょう。 

×：チケットが余ってしまった。なので、チケットをフリマサイトで定価よりも高い値段で売った。 

←チケット不正転売禁止法 にあたるので、してはいけません。 

  

さらに詳しく 

 A利用規約やルールを守る 

好きなアーティストやスポーツは、決まりを守って楽しみたい！法律や危険を犯してまで不正転売するのはやめましょう。また転売目的で転売品を買うのもアウトです。 

B行ける日×人数で申し込む 

チケットを多めに購入し、良い席だけ残して残りを高額転売した場合も違法とみなされるかも。 

チケットは利用できる範囲で購入するよう心がけましょう。 

C正しいルート以外の売買には危険が 

最近はSNSなどでの売買もよく見られますが、確認した正しいルートで売買しましょう。売ったチケットなどを利用するために教えた本人確認情報を悪用されてしまうこともあるので注意しましょう。 `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      case 14:
        if(Canswer[i] == 0){
          Kaisetsu[i] = `面白くない配信者に対して、ネットで誹謗中傷を行った。  

〇：誹謗中傷はしてはいけないのでしない。  

×： 自分の意見を表明することは大切なのでやり続ける。 

×：正義感からやったことなので問題はない。  

  

解説 

×：自分の意見を表明することは大切なのでやり続ける。 

←近年、動画投稿者・配信者やインフルエンサー、事件・事故の関係者ほか、『有名な人』と感じる範囲が広がると共に、主体的に投稿する人以外の“安易に再投稿・拡散する人”も増えています。たくさんの悪口が集まれば、集団攻撃となり人を酷く傷つけます。たとえ相手がどんな人であっても、単に再投稿しただけであっても、民事上・刑事上（損害賠償請求、名誉毀損罪による罰金、侮辱罪による拘留など）の責任を問われる可能性があります。このことを肝に銘じて、法律や利用規約などのルールやモラルを意識した、正しい利用を心がけましょう。 

×：正義感からやったことなので問題はない。 

←SNS上で、悪意を感じる投稿を見かけることがあります。中には「正義感からやったこと」と主張する人もいるようですが、“立場”や“事実かどうか”を問わず、人格を否定または攻撃するような投稿は正義ではありません。 

  

さらに詳しく 

A誹謗中傷≠批判意見 

ほとんどのSNSには「誹謗中傷禁止」の利用規約があります。相手の人格を否定する言葉や言い回しは、批判ではなく誹謗中傷。その違いを正しく見極め、安易に投稿・再投稿をしないで。 

B匿名性による気のゆるみ 

対面や実名では言えないのに、匿名だと言えたり攻撃性が増したりすることも。たとえ匿名でも、投稿の発信者を特定できる仕組みがあり、民事上・刑事上の責任を問われる可能性が… 

Cカッとなっても立ち止まって 

怒りは人の自然な感情ですが、はけ口にされやすいのがSNS。炎上したり訴えられたりしてから「あんな投稿しなければよかった」と悔やんでも時間は戻せません。書いた勢いで投稿しない習慣を！ `
        }else if(Canswer[i] == 1){
          Kaisetsu[i] = `面白くない配信者に対して、ネットで誹謗中傷を行った。  

〇：誹謗中傷はしてはいけないのでしない。  

×： 自分の意見を表明することは大切なのでやり続ける。 

×：正義感からやったことなので問題はない。  

  

解説 

×：自分の意見を表明することは大切なのでやり続ける。 

←近年、動画投稿者・配信者やインフルエンサー、事件・事故の関係者ほか、『有名な人』と感じる範囲が広がると共に、主体的に投稿する人以外の“安易に再投稿・拡散する人”も増えています。たくさんの悪口が集まれば、集団攻撃となり人を酷く傷つけます。たとえ相手がどんな人であっても、単に再投稿しただけであっても、民事上・刑事上（損害賠償請求、名誉毀損罪による罰金、侮辱罪による拘留など）の責任を問われる可能性があります。このことを肝に銘じて、法律や利用規約などのルールやモラルを意識した、正しい利用を心がけましょう。 

×：正義感からやったことなので問題はない。 

←SNS上で、悪意を感じる投稿を見かけることがあります。中には「正義感からやったこと」と主張する人もいるようですが、“立場”や“事実かどうか”を問わず、人格を否定または攻撃するような投稿は正義ではありません。 

  

さらに詳しく 

A誹謗中傷≠批判意見 

ほとんどのSNSには「誹謗中傷禁止」の利用規約があります。相手の人格を否定する言葉や言い回しは、批判ではなく誹謗中傷。その違いを正しく見極め、安易に投稿・再投稿をしないで。 

B匿名性による気のゆるみ 

対面や実名では言えないのに、匿名だと言えたり攻撃性が増したりすることも。たとえ匿名でも、投稿の発信者を特定できる仕組みがあり、民事上・刑事上の責任を問われる可能性が… 

Cカッとなっても立ち止まって 

怒りは人の自然な感情ですが、はけ口にされやすいのがSNS。炎上したり訴えられたりしてから「あんな投稿しなければよかった」と悔やんでも時間は戻せません。書いた勢いで投稿しない習慣を！ `
        }else{
          Kaisetsu[i] = "Error"
        }
        break;
      default:
        Kaisetsu[i] = "2Error"
        break;
    }
  }

  const Gamen: string[] = ["d","d","d","d","d","d","d","d","d","d","d","d","d","d"]

  const Hselected = selected - 1

  let seitousu = 0

  for(let i = 0; i<=13; i++){
    if(Canswer[i] == 0){
      Gamen[i] = `第${i+1}問:不正解`
    } else if(Canswer[i] == 1){
      Gamen[i] = `第${i+1}問:正解`
      seitousu = seitousu + 1
    } else{
      Gamen[i] = "error"
    }

    if(i > Hselected){
      Gamen[i] = ""
      Kaisetsu[i] = ""
    }
  }


  

  return (
    <div>
      <br /><br /><br />
      <p>最終結果</p>
      <p>選択された回答: </p><br /><br />
      <p>結果: {selected}問中{seitousu}問正解</p>
      <br /><br /><br /><br />
      <p>{Gamen[0]}</p><br /><p>{Kaisetsu[0]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[1]}</p><br /><p>{Kaisetsu[1]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[2]}</p><br /><p>{Kaisetsu[2]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[3]}</p><br /><p>{Kaisetsu[3]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[4]}</p><br /><p>{Kaisetsu[4]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[5]}</p><br /><p>{Kaisetsu[5]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[6]}</p><br /><p>{Kaisetsu[6]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[7]}</p><br /><p>{Kaisetsu[7]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[8]}</p><br /><p>{Kaisetsu[8]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[9]}</p><br /><p>{Kaisetsu[9]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[10]}</p><br /><p>{Kaisetsu[10]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[11]}</p><br /><p>{Kaisetsu[11]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[12]}</p><br /><p>{Kaisetsu[12]}</p><br /><br /><br /><br /><br />
      <p>{Gamen[13]}</p><br /><p>{Kaisetsu[13]}</p><br /><br />
    </div>
  );
}
