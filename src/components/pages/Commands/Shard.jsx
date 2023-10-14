import React, { useEffect } from "react";
import "./Shard.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Shard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="shards_stats">
        <h3 className="tWhite fs20 fwBold">
          Shards Stats - Choose a bot to view
        </h3>

        <ul id="selector_tiles" className="bots_tiles_minimized">
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius "
            data_shard_id="0"
            data_shard_length="2656"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/411916947773587456/dbdfec1a92c466ce59a324a497735a6e.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="1"
            data_shard_length="864"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/412347257233604609/5e8159b67a74d92153c8cd79cce4889c.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music (1)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="2"
            data_shard_length="512"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/412347553141751808/0d4361414132f16aab8a6486f1b7bb5b.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music (2)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="3"
            data_shard_length="288"
            // //onclick="updateUrlParam('bot','412347780841865216');showShards(3);searchShard(document.getElementById('shard_search').value)"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/412347780841865216/bd326c0e829d6708cf42a75ef9e68b58.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music (3)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="4"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/801167849291776020/cc5602f765785c39ca27aecf8f14851c.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="5"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/801756690553896970/ae6b56cefc5f91610877a295ca075995.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (1)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="6"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/877181816606425108/21b6d8280d499bf16fc577f9194dc480.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (2)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="7"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/877181938828460063/03409cf799ef9e9924e6cc5a733e8e39.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (3)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="8"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/877182056491282493/efac2ab74fa15330dcbf9b9db1bc7e43.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (4)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="9"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800093177512037/e2dfcf582dd887b03d695b622ff184f1.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (5)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="10"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800194297987092/fb25a5449e416e7ae2c66077ab3e3718.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (6)</span>
            </div>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="11"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800265055903815/3e1791bac07f2698790090bb459036ca.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (7)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="12"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800310169841734/e50dcb03560835db700923adaa290c2f.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (8)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="13"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800424716271757/1dd8d656d1172c480f0f8059e121e789.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (9)</span>
            </div>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="2000"
            className="tile minimized sRadius"
            data_shard_id="14"
            data_shard_length="32"
          >
            <div className="tile_title fs16">
              <img
                src="https://cdn.discordapp.com/avatars/1108800492362027098/3e3a59774247699d53cc57f7dd84d184.png"
                alt="bot_selector_img"
              />
              <span>Jockie Music Premium (10)</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Shard;
