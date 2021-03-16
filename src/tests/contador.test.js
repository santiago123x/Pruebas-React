import Contador from "../contador";
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from "enzyme";

describe("Pruebas sobre el componente contador", () => {
  test("Buscar parrafo", () => {
    // const { getByText } = render(<Contador propNum={0}/>)
    //  expect( getByText('HOLA SOY CONTADOR')).toBeInTheDocument()
  });

  test("Probando con enzyme", () => {
    const wrapper = shallow(<Contador propNum={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Busando parrafo en el componente", () => {
    const wrapper = shallow(<Contador propNum={0} />);
    const textoparrado = wrapper.find("h1").text();
    const textoenparra = "Hola Soy Contador Santiago";

    expect(textoenparra).toBe(textoparrado);

    //expect(wrapper).toMatchSnapshot()
  });

  test("Traer button", () => {
    const wrapper = shallow(<Contador propNum={23} />);
    const btn1 = wrapper.find("button").at(0);
    console.log(btn1.html());
  });

  test("Simular Click Boton Suma", () => {
    const wrapper = shallow(<Contador propNum={23} />);
    const btn1 = wrapper.find("button").at(0).simulate("click");
    const contando = wrapper.find("h3").text().trim();
    expect(contando).toBe("24");
  });

  test("Simular Click Boton Resta", () => {
    const wrapper = shallow(<Contador propNum={23} />);
    const btn1 = wrapper.find("button").at(1).simulate("click");
    const contando = wrapper.find("h3").text().trim();
    expect(contando).toBe("22");
  });

  test("Simular Click Boton Reset", () => {
    const wrapper = shallow(<Contador propNum={23} />);
    const btn1 = wrapper.find("button").at(2).simulate("click");
    const contando = wrapper.find("h3").text().trim();
    expect(contando).toBe("23");
  });

  test("Simular Varios Clicks", () => {
    const wrapper = shallow(<Contador propNum={23} />);
    const btn1 = wrapper.find("button").at(0).simulate("click");
    btn1.simulate("click");
    btn1.simulate("click");
    btn1.simulate("click");
    const btn2 = wrapper.find("button").at(1).simulate("click");
    btn2.simulate("click");
    btn2.simulate("click");
    btn2.simulate("click");
    const contando = wrapper.find("h3").text().trim();
    expect(contando).toBe("23");
  });

  test("Encontrar 2 br", () => {
    const wrapper = shallow(<Contador propNum={23} />);

    let bool = true;
    for (let i = 0; i < 2; i++) {
      if (wrapper.find("br").at(i).html() !== "<br/>") {
        bool = false;
      }
    }
    expect(bool).toBe(true);
  });
});
