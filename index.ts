import { fromEvent, of } from 'rxjs';
import { bufferCount, map, mergeMap, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffercount
// Example 3: Last n keyboard presses tracking
const fakeKeyPressesPost = (input$) =>
  of(201).pipe(
    tap((_) => {
      console.log(`received key presses are: ${input$}`);
      document.getElementById('output').innerText = input$;
    })
  );

fromEvent(document, 'keydown')
  .pipe(
    map((e: KeyboardEvent) => e.key),
    bufferCount(5),
    mergeMap(fakeKeyPressesPost)
  )
  .subscribe();
