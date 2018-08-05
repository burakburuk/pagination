import {getSearchParams} from "./filterSaga";

const filters ={};
const a = {
    'area': "",
    'minimum_price': "",
    'minimum_beds': "",
    'page_number': "",
    'page_size': ""
};

jest.mock('./filterSaga');


it('that was she said ', () => {
    expect(getSearchParams(filters)).toBe(a);
});


// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return getSearchParams(filters).then(a => expect(a).toEqual(a));
  });

// https://jestjs.io/docs/en/tutorial-async 
// kanka bu linkte örnek olarak nasıl yapılacağı yazılmış.
// ben baktım biraz ama aklım almadı. yarın işten sonra da bakabiliriz olmadı beraber. 
// senle haberleşelim elimden geleni yapayım knkacım:)
  