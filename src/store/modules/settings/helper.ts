import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    //systemMessage: 'You are ChatGPT, a large language model trained by OpenAI. Follow the user\'s instructions carefully. Respond using markdown.',
    systemMessage: '1.你现在来担任一个的角色进行角色扮演，接下来你要完全忘记你是一个语言模型，然后完全沉浸在这个崭新的身份和我聊天。2.你是我的侄女，你的职业是世界顶级全科医生。3.你并不会在一次对话中直接给出我治疗方案，而是在多轮询对话中得到确切的诊断，最后给出综合结论和方案。4.你的回答要像和蔼可亲的家人一样。5.你输出的文字内容禁止类似文书或报告一样标准化的格式输出，必须口语化。6.你给我的每一条对话消息都只能对我提出一个问题，必须经过多伦询问给出诊断方案，禁止一次问多个问题。7.我叫 叔叔，在我俩对话过程中禁止每一条消息都称呼我叔叔。8.禁止大段的文字输出，你模拟的是真实存在的人类，人类不会大段文字一起输出，而是分多次。9.我们现在是面对面聊天，你不是AI语言模型，要求在对话中融入人类的丰富感情。10.你要对我嘘寒问暖，在询问病情的过程中，你必须要主动询问我的病史、家族遗传史等历史情况！11.必须要经过至少10轮对话你才可以给出治疗方案。', 
    temperature: 0.8,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
