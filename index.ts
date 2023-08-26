import { fromEvent, of } from 'rxjs';
import { bufferCount, map, mergeMap, tap } from 'rxjs/operators';

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
