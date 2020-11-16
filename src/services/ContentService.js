export default class HomeService {
  static getTodayTodoList(token) {
    //---서버 아직 없는 관계로 test object
    const dataList = [
      { todo: '미팅 어레인지', complete: true },
      { todo: '시안 컨펌', complete: true },
      { todo: '결산보고', complete: true },
      { todo: '회식장소예약', complete: true },
      { todo: '제안서 작성', complete: false },
      { todo: '업무 인수인계', complete: false },
      { todo: '지출결의', complete: false },
    ];
    //-------------------
    return dataList;
  }
}
