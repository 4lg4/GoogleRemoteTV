<template>
  <div class="remote-yuri">
    <div>
      <div id=header>
<!--        <div id=logoPart><span>Remote Control Menu</span><i id=menuIcon></i></div>-->
        WHY WOULD YOU BUY A UNIVERSAL CONTROL WHEN YOU CAN MAKE A BETTER ONE?
      </div>
      <div id=workPart>
        <div class=tabBody>
          <div id=timeBody class=tabData>
            <br />
            <h3>Shortcut Keys:
              <button class=btn @click="command">It is Play Time!</button>
              <button class=btn @click="command">It is Netflix Time!</button>
              <button class=btn @click="command">I Gotta Sleep!</button>
            </h3>
            <div class=row>
              <button class=btn @click="command(commands.VOLUME_UP)">VOL+</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.CHANNEL_UP)">CH +</button>
            </div>
            <div class=row>
              <button class=btn @click="command(commands.VOLUME_DOWN)">VOL-</button>
              <button class=btn @click="command(commands.POWER)">POWER</button>
              <button class=btn @click="command(commands.CHANNEL_UP)">CH -</button>
            </div>
            <div class=row>
              <button class=btn @click="command(commands.MUTE)">MUTE</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.INPUT)">INPUT</button>
            </div>
            <div class=row>
              <button class=btn @click="command(commands.MENU)">MENU</button>
              <button class=btn @click="command(commands.GUIDE)">GUIDE</button>&nbsp;
              <button class=btn @click="command(commands.INFO)">INFO</button>
            </div>
            <br>
            <div class=row>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.UP)">---UP---</button>
            </div>
            <div class=row>
              <button class=btn @click="command(commands.LEFT)"><--</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.OK)">-OK-</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.RIGHT)">--></button>
            </div>
            <div class=row>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class=btn @click="command(commands.DOWN)">-DOWN-</button>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=logMsg>
      <app-logger v-model="logs"></app-logger>
    </div>
  </div>
</template>

<script>
import commands from '@/lib/commands';
import AppLogger from '@/components/app-logger.vue';

export default {
  name: 'remote-yuri',
  components: { AppLogger },
  data() {
    return {
      commands,
      logs: ['Page loaded success'],
    }
  },
  methods: {
    command(value) {
      this.logs.push(`command ${value} executed`);
      return true;
    }
  }
}
</script>

<style scoped>
  h3 {
    color: #eee;
    font-weight: 100;
    margin: 10px 0;
    font-size: 17px
  }

  #header {
    background-color: #fff;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
    color: #323232;
    color: #323232;
    line-height: 40px;
    text-align: center
  }

  #logoPart {
    width: 200px;
    height: 40px;
    float: left;
    margin: 0;
    color: #eee;
    font-size: 14px;
    background-color: #e8423e;
    line-height: 40px;
    padding-left: 15px;
    letter-spacing: 1px;
    text-align: LEFT
  }

  #workPart {
    background-color: #363842;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px 50px 120px 50px
  }

  .tabBody {
    border: 1px solid #999;
    padding: 15px 30px;
    min-height: 200px;
    background: #27282f
  }

  .btn {
    background: 0;
    color: #949ca2;
    border: 1px solid #949ca2;
    height: 30px;
    font-size: 14px;
    cursor: pointer;
    margin: 0px 10px 10px 10px;
  }

  .btn:hover {
    color: #eee
  }

  .bottomRow {
    margin-bottom: 1px
  }

  #logMsg {
    background: #010101;
    width: 100%;
    height: 80px;
    color: #eee;
    position: fixed;
    bottom: 0;
    padding: 5px 20px;
    font-size: 12px;
    border-top: 1px solid #5f4444
  }

  #logMsg p {
    padding: 0;
    margin: 2px
  }
</style>
