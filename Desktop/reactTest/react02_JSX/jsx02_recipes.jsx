// ** Recipe, Main 컴포넌트
//=> Main 컴포넌트가 Recipe 컴포넌트를 포함
//=> data 는 Main 컴포넌트 를 통해 전달

//1) Data 정의
//=> 배열 data = [ 객체1_Baked Salmon, 객체2_생선타코 ]
//               [{name:.., ingredients:.., step:...}, {.....}]

const data = [
  {
    "name": "Baked Salmon",
    "ingredients": [
        { "name": "연어", "amount": 500, "measurement": "그램" },
        { "name": "잣", "amount": 1, "measurement": "컵" },
        { "name": "버터 상추", "amount": 2, "measurement": "컵" },
        { "name": "옐로 스쿼시(Yellow Squash, 호박의 한 종류)", "amount": 1, "measurement": "개" },
        { "name": "올리브 오일", "amount": 0.5, "measurement": "컵" },
        { "name": "마늘", "amount": 3, "measurement": "쪽" }
    ],
    "steps": [
        "오븐을 350도로 예열한다.",
        "유리 베이킹 그릇에 올리브 오일을 두른다.",
        "연어, 마늘, 잣을 그릇에 담는다.",
        "오븐에서 15분간 익힌다.",
        "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.",
        "오븐에서 그릇을 꺼내서 15분간 식힌다음에 상추를 곁들여서 내놓는다."
    ]
  },  // data 배열 의 첫번째 원소 : 객체1 (Baked Salmon)
  {
      "name": "생선 타코",
      "ingredients": [
          { "name": "흰살생선", "amount": 500, "measurement": "그램" },
          { "name": "치즈", "amount": 1, "measurement": "컵" },
          { "name": "아이스버그 상추", "amount": 2, "measurement": "컵" },
          { "name": "토마토", "amount": 2, "measurement": "개(큰것)" },
          { "name": "또띠야", "amount": 3, "measurement": "개" }
      ],
      "steps": [
          "생선을 그릴에 익힌다.",
          "또띠야 3장 위에 생선을 얹는다.",
          "또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다."
      ]
  }, // data 배열 의 두번째 원소 : 객체2 (생선 타코)
  {
    "name": "이탈리아 정통 까르보나라",
    "ingredients": [
        { "name": "관찰레 (이탈리아식 돼지 볼살 소금절임)", "amount": 200, "measurement": "그램" },
        { "name": "달걀", "amount": 2, "measurement": "개" },
        { "name": "올리브유", "amount": 2, "measurement": "큰술" },
        { "name": "8호 스파게티니", "amount": 90, "measurement": "그램" },
        { "name": "페코리노 로마노 치즈", "amount": 30, "measurement": "그램" }
    ],
    "steps": [
      '냄비에 물을 끓이고 소금과 파스타 면을 넣고 9분간 끓인다.'
      , '팬에 올리브유를 두르고 약불에 관찰레를 굽고, 익으면 불을 끄고 대기한다. 여기서 나오는 기름은 면과 섞여야 하니 버리지 않는다.'
      , '보울에 달걀 노른자 2개, 소금 조금, 통후추를 그라인더로 10회 뿌리고 섞는다.'
      , '풀어진 달걀에 페코리노 로마노 치즈를 2/3 넣고 잘 섞어 소스를 만든다.'
      , '불이 꺼진 팬에 물끼를 뺀 파스타면을 넣고 관찰레와 잘 섞어준다.'
      , '팬이 적당히 식은 상태에서 달걀 소스를 넣고 잘 섞어준다.'
      , '★주의) 팬이 너무 달궈져 있으면 중국식 달걀 요리가 되니 주의하자!!'
      , '소스가 면에 잘 섞이게 해주고, 접시에 덜어서 남은 치즈를 뿌리고, 후추를 그라인더로 15회 만큼 뿌린다.'
      , '크리미하고 쿰쿰하고 짭짜롬한 이탈리아 정통 까르보나라 완성.  😗🤏🤏🤏'
    ]
  } // data 배열 의 세번째 원소 : 객체3 (각자 추가해보기)
] //data

//2) 컴포넌트 정의
//2.1) Recipe 컴포넌트
const Recipe = ({name, ingredients, steps}) => 
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    {/* id 에 space 가 포함되지않도록 하기위해 모든 space 를 - 으로 변경  
        => JSX 내부의 주석  */}
    <h1>{name}</h1>
    <ul className="ingredients">
      { ingredients.map(({name, amount, measurement}, i) => 
            <li key={i}>{name+' '+amount+measurement}</li>
      )}
    </ul>
    <section className="instructions">
      <h3>조리방법</h3>
      {steps.map((step, i) => 
            <p key={i}>{(i+1)+'. '+step}</p>
      )}
    </section>
  </section> //Recipe_end
 
//2.2) Main 컴포넌트
//=> 첫인자 recipes 로 위에 정의한 data 전달
const Main = ({recipes, title}) => 
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => 
        <Recipe key={i} {...recipe} />
          // ...recipe : 펼침연산자
          // name:recipe.name, ingredients:recipe.ingredients, steps:recipe.steps
      )}
    </div>
  </article> //Main_end

//3) 랜더링
const { render } = ReactDOM;
render(<Main recipes={data} title='Ummsam 의 맛있는 조리법'></Main>
      , document.getElementById('react-container')) //render