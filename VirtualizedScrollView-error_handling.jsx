Step 1


const VirtualizedScrollView = props => {
    return (
      <FlatList
        {...props}
        data={[]}
        keyExtractor={(e, i) => 'dom' + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => (
          <>{props.children}</>
        )}
      />
    );
  };


Step 2
 then use this style 

 <VirtualizedScrollView   style={{margin:10}} decelerationRate={0.5}>
 <PageOne></PageOne>
</VirtualizedScrollView>
