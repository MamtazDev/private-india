import React, { useEffect } from "react";
import "./Commands.css";
import Shard from "./Shard";
import ShardTitleCard from "./ShardTitleCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Commands = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mtop_100" style={{ backgroundColor: "black" }}>
      <h3 className="bot_title"> Bot status</h3>
      <div className="commands_bg content_master sRadius">
        <div id="quick_stats">
          <h3 className="tWhite fs20 fwBold">Quick Stats</h3>
          <ul className="row bots_tiles">
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="tile sRadius command1 col-md-3"
              // style={{ backgroundColor: "#812d33" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/411916947773587456/dbdfec1a92c466ce59a324a497735a6e.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>3,467,776</strong>
                  </li>
                  <li>
                    Users: <strong>52,960,806</strong>
                  </li>
                  <li>
                    Connections: <strong>7,040</strong>
                  </li>
                  <li>
                    Listeners: <strong>16,283</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=411916947773587456&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3  tile sRadius"
              // style={{ backgroundColor: "#008d7f" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347257233604609/5e8159b67a74d92153c8cd79cce4889c.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (1)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>1,152,005</strong>
                  </li>
                  <li>
                    Users: <strong>31,228,199</strong>
                  </li>
                  <li>
                    Connections: <strong>1,839</strong>
                  </li>
                  <li>
                    Listeners: <strong>4,345</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347257233604609&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              // style={{ backgroundColor: "#e91e63" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347553141751808/0d4361414132f16aab8a6486f1b7bb5b.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (2)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>660,270</strong>
                  </li>
                  <li>
                    Users: <strong>24,716,123</strong>
                  </li>
                  <li>
                    Connections: <strong>979</strong>
                  </li>
                  <li>
                    Listeners: <strong>2,226</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347553141751808&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius "
              // style={{ backgroundColor: "#f05f3b" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347780841865216/bd326c0e829d6708cf42a75ef9e68b58.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (3)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>381,732</strong>
                  </li>
                  <li>
                    Users: <strong>19,950,526</strong>
                  </li>
                  <li>
                    Connections: <strong>438</strong>
                  </li>
                  <li>
                    Listeners: <strong>969</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347780841865216&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
          </ul>
        </div>
        <div id="quick_stats">
          <h3 className="tWhite fs20 fwBold">Premium Bots - Quick Stats</h3>
          <ul className="row bots_tiles">
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="tile sRadius command1 col-md-3 w-full"
              // style={{ backgroundColor: "#E2C52F" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/411916947773587456/dbdfec1a92c466ce59a324a497735a6e.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>3,467,776</strong>
                  </li>
                  <li>
                    Users: <strong>52,960,806</strong>
                  </li>
                  <li>
                    Connections: <strong>7,040</strong>
                  </li>
                  <li>
                    Listeners: <strong>16,283</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=411916947773587456&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              // style={{ backgroundColor: "#3CD23C" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347257233604609/5e8159b67a74d92153c8cd79cce4889c.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (1)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>1,152,005</strong>
                  </li>
                  <li>
                    Users: <strong>31,228,199</strong>
                  </li>
                  <li>
                    Connections: <strong>1,839</strong>
                  </li>
                  <li>
                    Listeners: <strong>4,345</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347257233604609&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              // style={{ backgroundColor: "#5A18BD" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347553141751808/0d4361414132f16aab8a6486f1b7bb5b.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (2)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>660,270</strong>
                  </li>
                  <li>
                    Users: <strong>24,716,123</strong>
                  </li>
                  <li>
                    Connections: <strong>979</strong>
                  </li>
                  <li>
                    Listeners: <strong>2,226</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347553141751808&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#9A9A9A" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347780841865216/bd326c0e829d6708cf42a75ef9e68b58.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (3)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>381,732</strong>
                  </li>
                  <li>
                    Users: <strong>19,950,526</strong>
                  </li>
                  <li>
                    Connections: <strong>438</strong>
                  </li>
                  <li>
                    Listeners: <strong>969</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347780841865216&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
          </ul>
        </div>
        <div id="quick_stats">
          <ul className="row bots_tiles">
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="tile sRadius command1 col-md-3"
              style={{ backgroundColor: "#1C1C1C" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/411916947773587456/dbdfec1a92c466ce59a324a497735a6e.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>3,467,776</strong>
                  </li>
                  <li>
                    Users: <strong>52,960,806</strong>
                  </li>
                  <li>
                    Connections: <strong>7,040</strong>
                  </li>
                  <li>
                    Listeners: <strong>16,283</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=411916947773587456&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#CF40BA" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347257233604609/5e8159b67a74d92153c8cd79cce4889c.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (1)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>1,152,005</strong>
                  </li>
                  <li>
                    Users: <strong>31,228,199</strong>
                  </li>
                  <li>
                    Connections: <strong>1,839</strong>
                  </li>
                  <li>
                    Listeners: <strong>4,345</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347257233604609&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#AA8256" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347553141751808/0d4361414132f16aab8a6486f1b7bb5b.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (2)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>660,270</strong>
                  </li>
                  <li>
                    Users: <strong>24,716,123</strong>
                  </li>
                  <li>
                    Connections: <strong>979</strong>
                  </li>
                  <li>
                    Listeners: <strong>2,226</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347553141751808&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#4394D3" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347780841865216/bd326c0e829d6708cf42a75ef9e68b58.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (3)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>381,732</strong>
                  </li>
                  <li>
                    Users: <strong>19,950,526</strong>
                  </li>
                  <li>
                    Connections: <strong>438</strong>
                  </li>
                  <li>
                    Listeners: <strong>969</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347780841865216&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
          </ul>
        </div>
        <div id="quick_stats">
          <ul className="row bots_tiles">
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="tile sRadius command1 col-md-3"
              style={{ backgroundColor: "#FF7575" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/411916947773587456/dbdfec1a92c466ce59a324a497735a6e.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>3,467,776</strong>
                  </li>
                  <li>
                    Users: <strong>52,960,806</strong>
                  </li>
                  <li>
                    Connections: <strong>7,040</strong>
                  </li>
                  <li>
                    Listeners: <strong>16,283</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=411916947773587456&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#1DB071" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347257233604609/5e8159b67a74d92153c8cd79cce4889c.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (1)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong>1,152,005</strong>
                  </li>
                  <li>
                    Users: <strong>31,228,199</strong>
                  </li>
                  <li>
                    Connections: <strong>1,839</strong>
                  </li>
                  <li>
                    Listeners: <strong>4,345</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347257233604609&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3 tile sRadius"
              style={{ backgroundColor: "#e91e63" }}
            >
              <div className="tile_title fs20">
                <img
                  src="https://cdn.discordapp.com/avatars/412347553141751808/0d4361414132f16aab8a6486f1b7bb5b.png"
                  alt="bot_tile_img"
                />
                <span>Jockie Music (2)</span>
              </div>
              <div className="tile_info fs20">
                <ul>
                  <li>
                    Servers: <strong> 660,270</strong>
                  </li>
                  <li>
                    Users: <strong>24,716,123</strong>
                  </li>
                  <li>
                    Connections: <strong>979</strong>
                  </li>
                  <li>
                    Listeners: <strong>2,226</strong>
                  </li>
                </ul>
              </div>
              <a
                className="elm2Hover invite fwBold"
                href="https://discord.com/oauth2/authorize?client_id=412347553141751808&amp;scope=bot+applications.commands&amp;permissions=8"
                target="_blank"
                rel="noopener"
              >
                invite
              </a>
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-3"
              style={{ backgroundColor: "" }}
            ></li>
          </ul>
        </div>
        <Shard />
        <ShardTitleCard />
      </div>
    </div>
  );
};

export default Commands;
