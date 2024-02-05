import Grimacing from '../../../images/emoji/grimacing-face_1f62c.png';
import Neutral from '../../../images/emoji/neutral-face_1f610.png';
import Smirking from '../../../images/emoji/smirking-face_1f60f.png';
import Unamused from '../../../images/emoji/unamused-face_1f612.png';
import Weary from '../../../images/emoji/weary-face_1f629.png';
import WithoutMouth from '../../../images/emoji/face-without-mouth_1f636.png';
import Woozy from '../../../images/emoji/woozy-face_1f974.png';

export default (value) => {
    const emotions = {
        Neutral: Neutral,
        Unease: Grimacing,
        Mischief: Smirking,
        Unamused: Unamused,
        Weary: Weary,
        Woozy: Woozy,
        Nothing: WithoutMouth
      };

    return (
        <img src={emotions[value]} className="h-auto w-12" aria-hidden="true" />                                            
    )
}