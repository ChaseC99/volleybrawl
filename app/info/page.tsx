import styles from './page.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Collapsible from '../components/collapsible';

export default function Info() {
    return (
        <div className={styles.infoPage}>
            <div className={styles.header}>
                <h1>
                    <img src="/volleybrawl.png" alt="Volleybrawl logo" className={styles.headerLogo} />
                    Volleybrawl
                </h1>
                <p>Saturday, June 29 | 9am - 4pm</p>
            </div>

            <a
                className={styles.locationContainer}
                href='https://www.google.com/maps/search/?api=1&query=Kevin%20Moran%20Park'
            >
                <LocationOnOutlinedIcon />
                <div>
                    <p>Kevin Moran Park</p>
                    <p>12415 Scully Ave, Saratoga, CA 95070</p>
                </div>
            </a>

            <div className={styles.infoBody}>
                <Collapsible title="Gameplay" roundedTop>
                    <div>
                        <p>Everyone will be split up into 2 big squads (13 per squad).</p>
                        <br />
                        <p>It will be a mixed-format, where there will be 4v4 games, 3v3 games, and 2v2 games.</p>
                        <br />
                        <p>Everyone will end up playing 4 games.</p>
                    </div>
                </Collapsible>

                <Collapsible title="Court Setup">
                    <ul>
                        <li>4v4: full court size</li>
                        <li>3v3 and 2v2: small 'doubles' court size</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Net Height">
                    <p>Simple (not enforced, but strongly encouraged)</p>
                    <ul>
                        <li>Coed Game == Coed Height</li>
                        <li>Men's Game == Men's Height</li>
                        <li>Women's Game == Women's Height</li>
                    </ul>
                </Collapsible>

                <Collapsible title="Game Rules">
                    <div>
                        <p>There's a broad range of skill levels amongst everyone, so the recommendation is that you hold yourself to your own standards/expectations when it comes to calls for doubles, lift, net touches, etc.</p>
                        <br />
                        <p>Might be a good idea to go over expectations (e.g. open hand receives) before each match, especially if you think it's going to be a competitive game.</p>
                        <br />
                        <p>When in doubt, you can always redo a point 🙂</p>
                    </div>
                </Collapsible>

                <Collapsible title="House Rules!">
                    <div>
                        <p><strong>No touch ace == Steal a point</strong></p>
                        <p>If you get an ace where the other team doesn't even touch the ball before the ball touches the ground, not only do you get a point, but the other team LOSES a point.</p>
                    </div>
                    <br />
                    <div>
                        <p><strong>Give up the ball == Give up the point</strong></p>
                        <p>Let's say you just won a point and the ball is on your side of the court. If for some reason you roll/toss/kick the ball to the other side of the court, the previous point is voided and the other team serves. (The other team does not win a point though).</p>
                    </div>
                </Collapsible>

                <Collapsible title="Game Scoring" roundedBottom>
                    <ul>
                        <li>Each game will be 2 sets (no 3rd set even if each team wins 1 set).</li>
                        <li>Each set will play to 21 points (must win by 2, no hard cap).</li>
                        <li>The squad with most sets won at the end will be the winner of the tournament!</li>
                        <li>There will also be some individual recognition.</li>
                    </ul>
                </Collapsible>

                <div className={styles.whatToBringContainer}>
                    <h2>What to Bring</h2>
                    <ul className={styles.whatToBring}>
                        <li>🏐 Volleyball</li>
                        <li>💦 Plenty of water</li>
                        <li>🧴 Sunscreen</li>
                        <li>🍌 Snacks</li>
                        <li>🧦 Extra socks</li>
                        <li>🪑 Lawn chairs</li>
                        <li>⚡️ Energy</li>
                        <li>🥳 Enthusiasm</li>
                        <li>😎 Vibes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}